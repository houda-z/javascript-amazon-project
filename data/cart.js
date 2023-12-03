export let cart = JSON.parse(localStorage.getItem('cart')) ||[{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
},
{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1,
}];


function saveToStorage (){
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
const selectQuantity = document.querySelector(`.js-quantity-selector-${productId}`);
const selector = Number(selectQuantity.value);
selectQuantity.value = 1;

let matchingItem;
cart.forEach((cartItem) => {
  if(productId === cartItem.productId) {
    matchingItem = cartItem;
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
saveToStorage();
}

export function removeFromCart (productId){
const newCart = []; 

cart.forEach((cartItem) => {
  if(cartItem.productId !== productId){
  newCart.push(cartItem);
  }
});
cart = newCart;

saveToStorage();
}

export function updateCartQuantity(productId, valueOfInput) {
let NewQuantity;
cart.forEach((cartItem) => {
if(productId === cartItem.productId){
    NewQuantity = cartItem;}
});
if(NewQuantity){
  NewQuantity.quantity = valueOfInput;
}

  saveToStorage();
 }