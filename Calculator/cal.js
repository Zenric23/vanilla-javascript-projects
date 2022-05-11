
// printNumbers
function printOutput(num){
   var output =  document.querySelector('.output-value').value += num;
    new Intl.NumberFormat("en").format(output);
}


let number = document.querySelectorAll('.number');
for(var i =0; i<number.length; i++){
    number[i].onclick = function(){
        printOutput(this.innerText);
    }
}

// printOperators
let operators = document.querySelectorAll('.operator');
for(var i = 0; i<operators.length; i++){
    operators[i].onclick = function(){
        printOutput(this.id);
    }
}

let calculate = document.getElementById('=');
calculate.onclick = function(){
    var output = document.querySelector('.output-value');
try{
    output.value = eval(output.value);
}
catch(err){
    alert("invalid");
    output.value = "";
}   
}

let clear = document.getElementById('clear');
clear.onclick = function(){
    var output = document.querySelector('.output-value');
    output.value = "";
}

let backspace = document.getElementById('backspace');
backspace.onclick = function(){
    var output = document.querySelector('.output-value');
    output.value = output.value.slice(0, -1);
  
}
   
