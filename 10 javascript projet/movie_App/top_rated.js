



const BASE_URL = 'https://api.themoviedb.org/3';
const apiKey = '0889d9ccfc480fc7b6d2c55487556b2b';
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
const searchPath = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const form = document.querySelector('#form');
const input = form.querySelector('#search');

const getUrlReq = async (url) =>{
    const urlReq = await fetch(url)
    const jsonResponse = await urlReq.json()
    console.log(jsonResponse.results)
    postToWeb(jsonResponse.results)
}

getUrlReq(topRated)

function postToWeb(data){
    const imgPath = 'https://image.tmdb.org/t/p/w500';
    const moviesCon = document.querySelector('#main');
    moviesCon.innerHTML= ""
data.forEach(val=> {
    const {overview,title, backdrop_path, vote_average} = val
    const floorVote = Math.floor(parseInt(vote_average))
    const conEl = document.createElement('div')
    conEl.classList.add('movie')
    conEl.innerHTML = `
    <img src="${imgPath + backdrop_path}" class="image" alt="${title}">
    <div class="movieInfo">
        <h3>${title}</h3>
        <span class=${popularityColor(floorVote)}>${vote_average}</span>
    </div>`
    moviesCon.appendChild(conEl)
    getDesc(conEl, overview)
})
}

function getDesc(conEl, overview){
    const images = conEl.querySelectorAll('.image');
    images.forEach(image=>{
       image.addEventListener('click', (e)=>{
          let image = e.target;
         showDesc(image.src, overview);
       })
    })
 }
 
 function showDesc(src, desc){
   const modal = document.createElement('div')
   const modalCon = document.querySelector('.modalCon')
   modalCon.innerHTML = ""
   modal.classList.add('modal')
   modalCon.classList.add('active')
   modal.innerHTML = `
   <div class="modal">
   <div class="imagePart">
    <img src="${src}" alt="">
    </div>
   <div class="desc">
     <p>${desc}</p>
   </div>
   </div>
   `
   modalCon.appendChild(modal)
   modalCon.addEventListener('click', function(){
      this.classList.remove('active')
   })
 }

function popularityColor(val){
if(val >= 5){
    return "green"
}else{
    return "red"
}
}

form.addEventListener('submit', (e)=>{
   e.preventDefault()
   const removeColor= document.querySelectorAll('.color');
   removeColor.forEach(col=> col.classList.remove('color'))
   let inputTerm = input.value
   if(inputTerm){
       getUrlReq(searchPath + inputTerm)
   }
})

