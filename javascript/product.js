'use strict';

// Product informations
const products = [
  {
    name: 'Womens Jacket',
    price: '37,066 kr',
    information: 'sleek, silk, smooth. wrap up warmly for any occassion. ',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colourVariations: [
      {
        colour: 'beige',
        productImage: 'beige_womens_jacket.jpg',
      },
      {
        colour: 'brown',
        productImage: 'brown_womens_jacket.jpg',
      },
      {
        colour: 'blue',
        productImage: 'blue_womens_jacket.jpg',
      },
    ],
  },
  {
    name: 'Bjell Parka',
    price: '45,659 kr',
    information: 'sleek, silk, smooth. wrap up warmly for any occassion. ',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colourVariations: [
      {
        colour: 'beige',
        productImage: 'beige_bjell_parka.jpg',
      },
      {
        colour: 'brown',
        productImage: 'brown_bjell_parka.jpg',
      },
      {
        colour: 'blue',
        productImage: 'blue_bjell_parka.jpg',
      },
    ],
  },
  {
    name: 'Ugg Sneakers',
    price: '11,398 kr',
    information: 'sleek, silk, smooth. wrap up warmly for any occassion. ',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colourVariations: [
      {
        colour: 'beige',
        productImage: 'beige_ugg_sneakers.jpg',
      },
      {
        colour: 'brown',
        productImage: 'brown_ugg_sneakers.jpg',
      },
      {
        colour: 'blue',
        productImage: 'blue_ugg_sneakers.jpg',
      },
    ],
  },
  {
    name: 'Woolen Handbag',
    price: '17,887 kr',
    information: 'sleek, silk, smooth. wrap up warmly for any occassion. ',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colourVariations: [
      {
        colour: 'beige',
        productImage: 'beige_woolen_handbag.jpg',
      },
      {
        colour: 'brown',
        productImage: 'brown_woolen_handbag.jpg',
      },
      {
        colour: 'blue',
        productImage: 'blue_woolen_handbag.jpg',
      },
    ],
  },
  {
    name: 'Bjell Shirt',
    price: '11,398 kr',
    information: 'sleek, silk, smooth. wrap up warmly for any occassion. ',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colourVariations: [
      {
        colour: 'beige',
        productImage: 'beige_bjell_shirt.jpg',
      },
      {
        colour: 'brown',
        productImage: 'brown_bjell_shirt.jpg',
      },
      {
        colour: 'blue',
        productImage: 'blue_bjell_shirt.jpg',
      },
    ],
  },
  {
    name: 'Wool Sweater',
    price: '40,112 kr',
    information: 'sleek, silk, smooth. wrap up warmly for any occassion. ',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colourVariations: [
      {
        colour: 'beige',
        productImage: 'beige_wool_sweater.jpg',
      },
      {
        colour: 'brown',
        productImage: 'brown_wool_sweater.jpg',
      },
      {
        colour: 'blue',
        productImage: 'blue_wool_sweater.jpg',
      },
    ],
  },
];

// Get id search param from url
const searchParams = new URLSearchParams(window.location.search);
const id = parseInt(searchParams.get('id')) - 1;

// DOM variables
const title = document.getElementById('name');
const price = document.getElementById('price');
const info = document.getElementById('info');
const img = document.getElementById('productImg');
const colourRadioButtons = document.getElementsByName('colorGroup');

// Render all product infos to the page
const renderProductInfo = (id) => {
  title.innerHTML = products[id].name;
  price.innerHTML = products[id].price;
  info.innerHTML = products[id].information;
  changeImage(products[id].colourVariations);
  document.title = 'Bjell - ' + products[id].name;
};

// Change image
const changeImage = (colourVariations) => {
  // Loop colourRadioButtons
  for (let i = 0; i < colourRadioButtons.length; i++) {
    // Check if the current radio button is checked
    if (colourRadioButtons[i].checked) {
      // Loop colourVariations and find the colour that matches the one that is selected
      for (let j = 0; j < colourVariations.length; j++) {
        // Check if current colourVarioations.colour and colourRadioButtons.id matches
        if (colourRadioButtons[i].id === colourVariations[j].colour) {
          // Change img
          img.setAttribute('src', 'img/' + colourVariations[j].productImage);
          // Once found, exit the loop
          break;
        }
      }
      // Once found, exit the loop
      break;
    }
  }
};

// Add an event listener to each radio button
colourRadioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', (event) => {
    // Check if the radio button is checked
    if (event.target.checked) {
      // Change img
      changeImage(products[id].colourVariations);
    }
  });
});

renderProductInfo(id);
