import {cart} from '../../data/cart.js'

export function renderCheckoutHeader() {
  
  const cartQuantity = quantityOfItems();
  const checkoutHeaderHtml = `
  Checkout (<a class="return-to-home-link"
  href="amazon.html">${cartQuantity} items</a>)
  `;
  document.querySelector('.js-checkout-header')
  .innerHTML = checkoutHeaderHtml;
  }

  export function quantityOfItems(){
  let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
  }