export const cart = [];

export function addToCart(productId) {
  const selectQuantity = document.querySelector(`.js-quantity-selector-${productId}`);
  const selector = Number(selectQuantity.value);
  selectQuantity.value = 1;


  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId ===cartItem.productId) {
      matchingItem =cartItem;
    }
  });

  if (matchingItem){ 
    matchingItem.quantity += selector;
  }
  else{
    cart.push({ 
    productId: productId,
    quantity: selector
  });
  }
}