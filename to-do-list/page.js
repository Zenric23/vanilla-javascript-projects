
let addbtn = document.querySelector('.btn');
let addtask = document.querySelector('.add');
let task = document.querySelector('.item')
let taskContainer = document.querySelector('.container1');
let taskCon = document.querySelector('.taskContainer');


addbtn.addEventListener('click',() => {
    let text = addtask.value;
     
    if(text == ""){
        alert("enter task");
    }
    else{

        taskCon.innerHTML += `
        <div class="itemCon">
        <input type="text" class="item" value="${addtask.value}" readonly>
        <span class="removeBtn"><i class="far fa-trash-alt"></i></span>
          </div> 
          `;

          let remove = document.querySelectorAll('.removeBtn');

          for(var i = 0; i<remove.length; i++) {
              
            remove[i].onclick = function(){
                this.parentNode.remove();
            }
          }
         
          let style = document.querySelectorAll('.item');
          for(var i = 0; i<style.length; i++){
              style[i].onclick = function(){
                  this.classList.toggle("line");
              }
          }


          var newEl = document.createElement('p');
          newEl.setAttribute("class", "ex");
          newEl.innerHTML = "Only 4";
         newEl.classList.add("newElement");
       
          if(remove.length > 4){
            taskCon.innerHTML = "";
            taskCon.appendChild(newEl);
            }
            else if(remove.length == 1){
              taskCon.firstChild.remove();
            }

          

          addtask.value = ""
          
    }

    

})
