
const audio =  document.querySelector('audio')
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const image = document.querySelector('img')

const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress')

const playPauseBtn = document.querySelector('.playPause')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

const volumeContainer = document.querySelector('.volume-parent')
const volume = document.querySelector('.volume')
const volumeIcon = document.querySelector('.volumeIcon')
let isVolume = true

const bar = document.querySelector('.fa-bars')
let listShowing = false

const addSongEl = document.querySelector('.add-song')
const form = document.querySelector('form')
const formBtn = document.querySelector('form')

let isPlaying = false
let playIndex = 1

let isChangingBG = false


const source = [
    {
        name: 'I fall apart',
        music: 'musics/fallApart.mp3',
        image: 'images/stay.png',
        artist: 'Post Malone'
    },
    {
        name: 'Righteousness',
        music: 'musics/righteousness.mp3',
        image: 'images/faded.png',
        artist: 'Juice WRLD'
    },
    {
        name: 'Unforgettable',
        music: 'musics/unforgettable.mp3',
        image: 'images/fallingdown.jpg',
        artist: 'French Montana'
    }
];


window.onload = () => {
    initalMusicList();
    playIndex = Math.floor((Math.random() * source.length - 1) + 1)
    initialLoad()
    changeColor()
}



function changeColor() {
    const musicCon = document.querySelectorAll('.musicCon')
    let random1 = Math.floor(Math.random() * 255) + 1
    let random2 = Math.floor(Math.random() * 255) + 1
    let random3 = Math.floor(Math.random() * 255) + 1

    document.body.style.background = `rgba(${random1},${random2},${random3},1)`
    for(let i = 0; i < musicCon.length; i++){
        musicCon[i].style.background = `rgba(${random1}, ${random2}, ${random3}, 0.9)`
    }
}

function initialLoad(){
    let sourceNav = source[playIndex]
    
    title.innerText = sourceNav.name
    audio.src = sourceNav.music
     image.src = sourceNav.image
     artist.innerText = sourceNav.artist
    
}

function play() {
    audio.play()
    image.style.animationPlayState = 'running'
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
    isPlaying = true;
    isChangingBG = true
}

function pause() {
    audio.pause()
    image.style.animationPlayState = 'paused'
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
    isPlaying = false
    isChangingBG = false
}

function nextSong() {
    playIndex++

    if(playIndex > source.length - 1){
       playIndex = 0
    }
        
    initialLoad()
    play() 
}

function prevSong() {
    playIndex--

    if(playIndex < 0) {
        playIndex = source.length - 1;
    }

    initialLoad()
    play()
}

function setProgress(e) {
const width = this.clientWidth
const clickX = e.offsetX
const duration = audio.duration

audio.currentTime = (clickX / width) * duration
}

function showList() {
 document.querySelector('.music-container').classList.add('active')
 listShowing = true
}

function hidelist() {
 document.querySelector('.music-container').classList.remove('active')
 listShowing = false
}

function muteVolume() {
isVolume = false

volumeIcon.classList.remove('fa-volume-up')
volumeIcon.classList.add('fa-volume-down')
volume.style.width = '0px'
audio.volume = 0
}

function fullVolume() {
isVolume = true

volumeIcon.classList.remove('fa-volume-down')
volumeIcon.classList.add('fa-volume-up')
volume.style.width = '100%'
audio.volume = 1
}

function setVolume(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    
    audio.volume = (clickX / width) * 1
    volume.style.width = `${clickX}px`
}

function showForm() {
    form.classList.add('active')
    }
    
    function hideForm(e) {
    e.target.classList.remove('active')
    }
    
    function handleSubmit() {
    e.preventDefault()
    const musicInput = document.querySelector('#musicInput').value
    const imageInput = document.querySelector('#imageInput').value
    
    source.push(
        {
            
        }
    ) }


function initalMusicList() {
    const musicList = document.querySelector('.music-list')
    const control = document.createElement('div')
    control.classList.add('controlList') 

    for(let i = 0; i < source.length; i++) {
    const musicCon = document.createElement('div')
    musicCon.classList.add('musicCon')
    const{image, name, artist} = source[i]

        musicCon.innerHTML = `
        <div class="imageCon">
        <img src=${image}>
        <p class = "musicListArtist">${artist}</p>
        </div>
        <p class="musicListName">${name}</p>
        `
        control.append(musicCon)
        
    
        musicCon.addEventListener('click', () =>{
        playIndex = i
        document.querySelector('.music-container').classList.remove('active')

        initialLoad()
        play()
        })

    }
    musicList.append(control)
}



// Event listener
playPauseBtn.addEventListener('click', () => {

    isPlaying ? pause() : play()
   
    let  interval = setInterval(() => {

       isChangingBG ? changeColor() : clearInterval(interval)

    }, 800);
})

audio.addEventListener('timeupdate', (e) => {
    const{currentTime, duration} = e.target
    progress.style.width = `${(currentTime / duration) * 100}%`
})

bar.addEventListener('click', () => {
    listShowing ? hidelist() : showList() 
})

volumeIcon.addEventListener('click', () => {
    isVolume ? muteVolume() : fullVolume()
 })
   
audio.addEventListener('ended', nextSong)

next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)

progressContainer.addEventListener('click', setProgress)

volumeContainer.addEventListener('click', setVolume)

addSongEl.addEventListener('click', showForm)
form.addEventListener('click', hideForm)
form.addEventListener('submit', handleSubmit)





