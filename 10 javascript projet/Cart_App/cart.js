
function openModal(){
    
    const blur = document.querySelector('.container');
    blur.classList.add('active')
    const modal = document.querySelector('.modal');
    modal.classList.add('active')
    const nav = document.querySelector('.nav');
    nav.classList.add('removeNav')    
}
function closeModal(){
    const blur = document.querySelector('.container');
    blur.classList.remove('active')
    const modal = document.querySelector('.modal');
    modal.classList.remove('active')
    const nav = document.querySelector('.nav');
    nav.classList.remove('removeNav')
}

const cartItems = document.querySelector('.output');
const container = document.querySelector('.container');
const cartCon = document.querySelector('.cartItems');


function purchased(){
   if(cartCon.firstElementChild){
    alert('thanks for purchasing')
 }
   else{
     alert('Cart is empty')
 }
 
  while(cartCon.hasChildNodes()){
      cartCon.removeChild(cartCon.firstChild)
  }
  updateTotal()
}

function quantityChanged(){
const inputEl = cartItems.querySelectorAll('.quantity');

inputEl.forEach(input =>{
input.onchange = function(){
let inputVal = this
if(inputVal.value < 0 || inputVal.value > 5){
    inputVal.value = 0
}
updateTotal()
}})}

function updateTotal(){
 const totalVal = document.querySelector('.total');
 const cartRow = cartItems.querySelectorAll('.cartRow')
 let total = 0;

cartRow.forEach(row =>{
    let priceElement = row.querySelector('.price')
    let quantityElement = row.querySelector('.quantity');
    let quantity = parseInt(quantityElement.value)
    let price = parseFloat(priceElement.id)
    total += quantity*price
})
totalVal.innerText = `Total: $${total}`
}


function addToCartClicked(event){
let button = event.target
let card = button.parentElement
let title = card.querySelector('.title').innerText
let price = card.querySelector('.price').innerText
let image = card.querySelector('.image').src
addItemtoCart(title, price, image)
}

function addItemtoCart(title, price, image){
const cartRow = document.createElement('div');
const itemName = cartItems.querySelectorAll('.title');

for(let i = 0; i<itemName.length; i++){
    let name = itemName[i]
    if(name.id === title){
        alert('already in cart')
        return
    }
}

cartRow.innerHTML += `
<div class="cartRow">  
<div class="item">
<img src="${image}" class="image" alt="" />
<h4 style="margin-left: 5px;" class="title" id="${title}">${title}</h4>
</div>
<div class="priceCol">
<h4>$<h4 style="margin-right: 10px;" class="price" id="${price}">${price}</h4></h4>
<input type="number" class="quantity" value="1">
</div>
<button class="remove" id="remove">REMOVE</button>
</div>
`
cartCon.appendChild(cartRow)
quantityChanged()
removeRow()
updateTotal()
}

function removeRow(){
 const removeBtn = cartItems.querySelectorAll('.remove');
 for(let i = 0; i<removeBtn.length; i++){
     let btn = removeBtn[i]
     btn.addEventListener('click', (e)=>{
         let btn = e.target
         btn.parentElement.remove()
         updateTotal()    
     })
 }
}


const btn = document.querySelectorAll('.btn');
for(let i = 0; i<btn.length; i++){
    let button = btn[i]
    button.addEventListener('click', addToCartClicked)
}

const purchaseBtn = cartItems.querySelector('.purchase');
purchaseBtn.addEventListener('click', purchased)






















