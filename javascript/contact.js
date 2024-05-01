'use strict';

// Modal for telling user the message was sent
const modal = new bootstrap.Modal(
  document.getElementById('contactSuccessfulModal')
);
// Contact form and textarea
const contactForm = document.getElementById('contactForm');
const messafeTextArea = document.getElementById('messageTextArea');
// Span element where the character count will be displayed
const charCountSpan = document.getElementById('charCount');
// Invalid form feedback message
const invalidFormFeedback = document.getElementById('invalidFormFeedback');
// Check if the form was submitted and the state is stored in localStorage
const isFormSubmitted = localStorage.getItem('formSubmitted');

// If the form was submitted previously, show the modal
if (isFormSubmitted === 'true') {
  modal.show();
  localStorage.removeItem('formSubmitted');
}

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

// Add event listener to messafeTextArea for input event
messafeTextArea.addEventListener('input', () => {
  // Get the value of the messafeTextArea
  const text = messafeTextArea.value;

  // Count the characters
  const charCount = text.length;

  // Update the character count display
  charCountSpan.textContent = charCount + '/300';
});

// const myModal = document.getElementById('myModal');
// const myInput = document.getElementById('myInput');

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus();
// });
