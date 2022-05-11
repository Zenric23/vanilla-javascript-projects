
function countdown(){
    const countDate = new Date('October 19, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
     console.log(gap)
    /*All millisecond */
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const txtDay = Math.floor(gap / day);
    const txtHour = Math.floor((gap % day) / hour)
    const txtMinute = Math.floor((gap % hour) / minute)
    const txtSecond = Math.floor((gap % minute) / second)
    
    document.querySelector('.day').innerHTML = txtDay   
    document.querySelector('.hour').innerHTML = txtHour
    document.querySelector('.minute').innerHTML = txtMinute
    document.querySelector('.second').innerHTML = txtSecond 
    if(gap < 1000){
        lunchBG()
    }
}

let interval =  setInterval(countdown, 1000)

function lunchBG(){
    clearInterval(interval)
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    document.querySelector('.countdown').innerHTML = "";
    document.querySelector('h2').innerHTML = "Sorry we are closed!";
    document.querySelector('img').style.display = 'none';
}