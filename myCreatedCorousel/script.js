

const slide = document.querySelectorAll('.slide');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

function nextSlide(){
    const active = document.querySelector('.active')
    active.classList.remove('active')
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add('active')
    }else{
        slide[0].classList.add('active')
    }
}   

function prevSlide(){
    const active = document.querySelector('.active')
    active.classList.remove('active')
    if(active.previousElementSibling){
        active.previousElementSibling.classList.add('active')
    }else{
        slide[slide.length - 1].classList.add('active')
    }
}

let autoSlide = setInterval(nextSlide,3500)

right.addEventListener('click', ()=>{
    nextSlide()
    clearInterval(autoSlide)
    autoSlide = setInterval(nextSlide,3500)
})

left.addEventListener('click', ()=>{
   prevSlide()
   clearInterval(autoSlide)
   autoSlide = setInterval(nextSlide,3500)
})





