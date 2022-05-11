var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var textbox = document.getElementById('val');
var overall = document.querySelector('.product_amount');
var total = document.querySelector('.total');


minus.addEventListener('click', () => {
    

    if(textbox.value <=1 ){
      textbox.value = 1;
     overall.innerHTML="45";
     total.innerHTML="45";
    }
   
    else{
       
        
        textbox.value = parseInt(textbox.value) - 1; 
        overall.innerHTML = parseInt(overall.innerHTML) - 45 ;
    }

})

plus.addEventListener('click', () =>{

    if (textbox.value >= 5) {
        
       return false;
    }
    else{
        
        textbox.value = parseInt(textbox.value) + 1;
        total.innerHTML = parseInt(total.innerHTML) + 45;
        overall.innerHTML = parseInt(overall.innerHTML) + 45;
        
    }
})

    
