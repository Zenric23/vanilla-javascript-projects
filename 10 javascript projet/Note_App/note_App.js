const title = document.querySelector(".titleText");
const desc = document.querySelector(".descText");
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector(".form");


function addNotes() {
   
  const notes = document.querySelector(".notes");
  if (title.value != "" && desc.value != "") {
    const card = document.createElement("div");
    card.classList.add("card2");
    card.innerHTML = `
    <h3 class="tite">${title.value}</h3>
    <p class="desc">${desc.value}</p>
    <button class=delNote>&times</button>`;
    notes.appendChild(card);
  
    delNotes();
    desc.value = "";
    title.value = "";
  }
  return;
}

function delNotes() {
  const del = document.querySelectorAll(".delNote");
  del.forEach(
    (item) =>
      (item.onclick = function () {
        this.parentElement.remove();
      })
  );
}

addBtn.addEventListener("click", addNotes);
form.addEventListener('submit', (e) => {
e.preventDefault()
})

