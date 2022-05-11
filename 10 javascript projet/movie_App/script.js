

const API_KEY = 'api_key=0889d9ccfc480fc7b6d2c55487556b2b';
const BASE_URL = 'https://api.themoviedb.org/3';
const movieUrl = '/discover/movie?sort_by=popularity.desc&';
const searchUrl = BASE_URL + '/search/movie?' + API_KEY + '&query=';
const defaultMoviesUrl = BASE_URL + movieUrl + API_KEY;
const form = document.querySelector('#form')
const search = document.querySelector('#search')

const getMovieRequest = async (url) =>{
const API_URL = await fetch(url)
const jsonResponse = await API_URL.json()
console.log(jsonResponse)
showMovie(jsonResponse.results)
}
getMovieRequest(defaultMoviesUrl)

const showMovie = async (movieSearch)=>{
   const imageUrl = 'https://image.tmdb.org/t/p/w500';
   const movies = document.querySelector('#main')
   movies.innerHTML = ""
   movieSearch.forEach(movie=> {
      const {overview, poster_path, vote_average, title} = movie
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')
      movieEl.innerHTML = `
      <img src="${imageUrl +poster_path}" class="image" alt="">
      <div class="movieInfo">
          <h4 class="showJoke">${title}</h4>
          <span class=${getColor(vote_average)}>${vote_average}</span>
      </div>
      ` 
      movies.appendChild(movieEl)
      getDesc(movieEl, overview)
   })
}

function getDesc(movieEl, overview){
   const images = movieEl.querySelectorAll('.image');
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


form.addEventListener('submit', (e)=>{
   e.preventDefault()
   const removeColor= document.querySelectorAll('.color')
   removeColor.forEach(col=> col.classList.remove('color'))
   let searchTerm = search.value
   if(searchTerm){
      getMovieRequest(searchUrl+searchTerm)
      
   }
   
})

function getColor(val){
   if(val >= 8){
      return "green"
   }else if(val >= 5){
      return "orange"
   }
   else{
      return "red"
   }
   }

   

/*
const getDataFromForm = () => {
   const requestObj = {
      firstname: "Zenric",
      lastname: "Clarete",
      categories: ['explicit']
   }
   return requestObj
}

const buildRequestURL = (requestData) =>{
   return `http://api.icndb.com/jokes/random?firstName=${requestData.firstname}&lastName=${requestData.lastname}
   &limitTo=${requestData.categories}`
}

const requestJoke = async (url) =>{

    const response = await fetch(url);
    const jsonResponse = await response.json() 
    const joke =jsonResponse.value.joke
    postWebJoke(joke)
}

const postWebJoke = (joke)=>{
   console.log(joke)
}

const processJokeRequest = async () =>{
   const dataFromForm = getDataFromForm()
   const requestUrl = buildRequestURL(dataFromForm)
   await requestJoke(requestUrl)
   console.log("finished!")
}

processJokeRequest()
*/




    






   
