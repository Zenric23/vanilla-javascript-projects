


const api = '8af5de55adec2b3ff25d2dabb10f2ff8';
const baseUrl = 'https://api.openweathermap.org/';
const cloudImage = `${baseUrl}img/w/`;
const form = document.querySelector('form');
const conEl = document.querySelector('.box-container');

/* ${baseUrl}data/2.5/weather?q=saudi+arabia&appid=${api} */
const getReq = async (url) =>{
  try{
    const urlReq = await fetch(url)
    const jsonResponse = await urlReq.json()

    console.log(jsonResponse)
    postImage(jsonResponse)
  }catch (error){
    conEl.innerHTML = `<div class="error"><h1>CITY NOT FOUND!</h1></div>`
  }
}

getReq(`${baseUrl}data/2.5/weather?q=philippines&appid=${api}&units=metric`)


function postImage(getIcon){
 const weatherDetails = getIcon.weather[0]
 const temperature = getIcon.main.temp
 const cityName = getIcon.name
 const badgeName = getIcon.sys.country
 
 const {description, icon} = weatherDetails;

 conEl.innerHTML = ""
 const boxCon = document.createElement('div')
 boxCon.classList.add('box')
  
 boxCon.innerHTML = `
 <p class="cityCon">
     <span class="city">${cityName}</span>
    <span class="badge">${badgeName}</span>
</p>
<div>
<p class="tempCon">
    <span class="temp">${Math.round(temperature)}</span>
    <span class="cel">&#8451;</span>
</p>
</div>
<img src="${postIcon(getIcon)}" alt="">
<p class="desc">${description}</p>
  </div>
  `
  conEl.appendChild(boxCon)
}

 function postIcon(weatherInfo){
 const id = weatherInfo.weather[0].id
 
 if(id >= 200 && id <= 232 ){
     return 'weatherIcons/storm (1).png'
 }else if(id >= 300 && id <= 321){
    return 'weatherIcons/dizzy.png'
 }else if(id >= 500 && id <= 531){
     return 'weatherIcons/rain.png'
 }else if(id >= 600 && id <= 622){
     return 'weatherIcons/snowflakes.png'
 }else if(id >= 701 && id <= 781){
     return 'weatherIcons/hurricane.png'
 }else if(id === 800){
     return 'weatherIcons/sun.png'
 }else if(id >= 801 && id <= 804){
     return 'weatherIcons/cloudy.png'
 }}
 



form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = document.querySelector('input')
    let term = input.value
    if(term){
        getReq(`${baseUrl}data/2.5/weather?q=${term}&appid=${api}&units=metric`)
    }  
    form.reset()
})

