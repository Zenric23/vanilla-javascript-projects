

const time = document.querySelector('#time'),
greeting = document.querySelector('.greeting'),
name = document.querySelector('.name'),
focus = document.querySelector('.focus');
let show = true;

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();
    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    time.innerHTML = `${addZero(hour)}:${addZero(minute)}:${addZero(second)}
     ${show ? amPm : ''}`;
    
}

function addZero(n){
return (n < 10 ? '0' : "") + n; 
}

function setBG(){
    let today = new Date()
    let hour = today.getHours()

    if(hour < 12){
        document.body.style.background =  'yellow';
        document.body.style.color =  'black';
    }
    else if(hour < 18){
        document.body.style.background =  'green';
        document.body.style.color =  'black';
    }
    else{
        document.body.style.background =  'black';
        document.body.style.color =  'white';
    }}


    setInterval(showTime,1000)
    setBG()

    function getName(){
        if(localStorage.getItem('name') === null){
            name.textContent = '[Enter name]';
        }else{
            name.textContent = localStorage.getItem('name')
        }
    }
    