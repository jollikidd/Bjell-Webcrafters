'use strict';

// Modal for telling user that form submit was successful
const modal = new bootstrap.Modal(
  document.getElementById('contactSuccessfulModal')
);
// Contact form
const contactForm = document.getElementById('contactForm');
// Textarea
const messageTextArea = document.getElementById('messageTextArea');
// Span element where the character count will be displayed
const charCountSpan = document.getElementById('charCount');
// Invalid form feedback message
const invalidFormFeedback = document.getElementById('invalidFormFeedback');
// Reset the from button
const resetFormBtn = document.getElementById('resetFormBtn');
// Check if the form was submitted and the state is stored in localStorage
const isFormSubmitted = localStorage.getItem('formSubmitted');

// If the form was submitted previously, show the modal and delete formSubmitted from localStorage
if (isFormSubmitted === 'true') {
  modal.show();
  localStorage.removeItem('formSubmitted');
}

// Add event listener to messageTextArea for input event
messageTextArea.addEventListener('input', () => {
  // Get the value of the messageTextArea
  const text = messageTextArea.value;
  // Count the characters
  const charCount = text.length;
  // Update the character count display
  charCountSpan.textContent = charCount + '/300';
});

// Reset the contact from when user clicks the resetFormBtn
resetFormBtn.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  contactForm.reset();
});

// Add event listener to the form and check if it is valid
contactForm.addEventListener(
  'submit',
  (event) => {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      invalidFormFeedback.classList.add('d-block');
    }

    // Set the form submission state in localStorage
    localStorage.setItem('formSubmitted', 'true');

    contactForm.classList.add('was-validated');
  },
  false
);
