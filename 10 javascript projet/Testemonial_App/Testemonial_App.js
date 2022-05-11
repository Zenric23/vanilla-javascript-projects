

const slide = document.getElementById('slide');
const up = document.getElementById('upArrow');
const down = document.getElementById('downArrow');

let x = 0;

upArrow.onclick = function (){
    x = x-300;
    slide.style.top = x + "px";
}


