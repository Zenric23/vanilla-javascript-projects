
/*
const contianer = document.querySelector('.container');
const image = document.querySelector('img');


contianer.addEventListener("mousemove", (e) =>{
    
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x,y)

    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = "scale(2)";
})
contianer.addEventListener('mouseleave', () =>{
    image.style.transformOrigin = 'center center';
    image.style.objectFit = 'cover';
})
*/

const input = 25
let result = input % 12;
if(input == 12 || input == 24){
    result = 12
}

