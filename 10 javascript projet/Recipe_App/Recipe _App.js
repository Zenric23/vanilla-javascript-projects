const recipeForm = document.querySelector("#recipe-form");
const recipeContainer = document.querySelector("#recipe-container");
let itemList = [];

function handleFormSubmit(e) {
  e.preventDefault();
  const name = DOMPurify.sanitize(recipeForm.querySelector("#name").value);
  const method = DOMPurify.sanitize(recipeForm.querySelector("#method").value);
  const roast = DOMPurify.sanitize(recipeForm.querySelector("#roast").value);
  const size = DOMPurify.sanitize(recipeForm.querySelector("#size").value);
  const ratio = DOMPurify.sanitize(recipeForm.querySelector("#ratio").value);
  const notes = DOMPurify.sanitize(recipeForm.querySelector("#notes").value);
  const newRecipe = {
    name,
    method,
    roast,
    size,
    ratio,
    notes,
    id: Date.now(),
  };
  itemList.push(newRecipe);
  e.target.reset();
 recipeContainer.dispatchEvent(new CustomEvent('refreshRecipes'));
 
}

function displayRecipes() {
  const temString = itemList.map( item =>
    
      `
      <div class="col ">
        <div class="card recipeData mb-4 " >
  <h5 class="card-header py-3 text-center bg-primary text-white">${item.name}</h5>
  <div class="card-body">
  <ul class="text-start">
  <li><strong>Method: </strong>${item.method}</li>
  <li><strong>Roast: </strong>${item.roast}</li>
  <li><strong>Grind: </strong>${item.size}</li>
  <li><strong>Ratio: </strong>${item.ratio}</li>
  ${!item.notes.length ? "" : `<li><strong>Note:</strong>${item.notes}</li>`}
 
  </ul>
  <button type="button" class="btn btn-outline-danger btnDelete" aria-label="Delete ${item.name}" 
  value="${item.id}">Danger</button>
  </div>
</div>
</div> `  

  ).join("");
  recipeContainer.innerHTML = temString;
}

function mirrorStateLocalStorage(){
    localStorage.setItem('recipeContainer.list', JSON.stringify(itemList));
}

function loadinitialUI () {
    const tempLocalStorage = localStorage.getItem('recipeContainer.list');
    if(tempLocalStorage === null || tempLocalStorage === []) return;
    const tempRecipes = JSON.parse(tempLocalStorage);
    itemList.push(...tempRecipes);
    recipeContainer.dispatchEvent(new CustomEvent('refreshRecipes'));

   
}

function deleteRecipeFromList (id){
   itemList = itemList.filter(item=> item.id !== id);
   recipeContainer.dispatchEvent(new CustomEvent('refreshRecipes'));

}

recipeContainer.addEventListener('click', (e) => {
    console.log(e.target.matches('.deleteBtn'));
})

recipeForm.addEventListener("submit", handleFormSubmit);

recipeContainer.addEventListener('refreshRecipes', displayRecipes);
recipeContainer.addEventListener('refreshRecipes', mirrorStateLocalStorage);
window.addEventListener('DOMContentloaded', loadinitialUI); 
recipeContainer.addEventListener('click', (e) => {
    if(e.target.matches('.btnDelete')){
        deleteRecipeFromList(Number(e.target.value))
    }
})



