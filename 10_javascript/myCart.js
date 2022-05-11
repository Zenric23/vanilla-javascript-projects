
function toggle(){
    const modal = document.querySelector('.myModal');
    const icon = document.querySelector('.icon');
    modal.classList.toggle('active')
    icon.classList.toggle('active')
}

const items = document.querySelector('.items');

function addToCartClicked(e){
let btn = e.target
let parent = btn.parentElement
const name = parent.querySelector('.name').innerText
const price = parent.querySelector('.price').innerText
const image = parent.querySelector('.image').src
printItemToCart(name,price,image)
}

function printItemToCart(name, price, image){
const con = document.createElement("div");
const nameEl = items.querySelectorAll('.name')
for(let i = 0; i<nameEl.length; i++){
    let productName  = nameEl[i]
    if(productName.id == name){
        alert('Already in the Cart')
        return
    }}
con.innerHTML += `
<div class="item">
<div class="row">
   <div class="item-name">
    <img src="${image}" class="img-fluid">
    <p class="text-center name" id="${name}">${name}</p>
   </div>
   <div class="input">
   <input type="number" max="5" min="1" class="quantity text-center" value="1">
   <p class="priceCon">$<span class="cart-price" id="${price}">${price}</span></p>
</div>
<button class="remove">Remove</button>
</div>
</div>`
items.appendChild(con)
const removeBtn = items.querySelectorAll('.remove')
deleteItem(removeBtn)
changeQuantity()
updateTotal()
}

function changeQuantity(){
const quantityEl = items.querySelectorAll('.quantity');
quantityEl.forEach(input=>{
    input.addEventListener('change', ()=>{
        let inputVal = input.value
        if(inputVal > 5 || inputVal < 1){
            input.value = 1
        }
        updateTotal()
    })
})
}

function updateTotal(){
const item = document.querySelectorAll('.item');
const totalEl = document.querySelector('.total'); 
let sum = 0
for(let i = 0; i<item.length; i++){
let myItem = item[i]
const priceEl = myItem.querySelector('.cart-price').id
const quantity = myItem.querySelector('.quantity').value
let price = parseFloat(priceEl)
sum += price*quantity
}
totalEl.innerHTML = `Total: $${sum}`
}

function deleteItem(removeBtn){
for(let i = 0; i<removeBtn.length; i++){
    let btn = removeBtn[i]
    btn.addEventListener('click', (e)=>{
        let btn = e.target
        btn.parentElement.parentElement.remove()
        updateTotal()
    })
}}

const btn = document.querySelectorAll('.btn');
btn.forEach(item =>{
    item.addEventListener('click', addToCartClicked)
})

