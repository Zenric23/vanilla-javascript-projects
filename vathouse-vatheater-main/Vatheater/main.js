const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const image = 'https://image.tmdb.org/t/p/w500';
const apikey = '723c849121d214ebd66ccfd0fb6bbb31';
const videoURL = 'https://www.youtube.com/embed/';
const movie = document.getElementById("movie");
const more = document.getElementById("more");
const trailer = document.getElementById("trailer-movie");

const light = document.getElementById("light");
const dark = document.getElementById("dark");
let body = document.querySelector("body");
light.addEventListener("click", () => {
    body.classList.add("change");
    dark.classList.add("block");
    light.style.display = "none";
    document.getElementById("pn").classList.add("pn-color");
    document.getElementById("error-page").classList.add("error");
    document.getElementById("onpage").classList.add("pageOn");
})
dark.addEventListener("click", () => {
    body.classList.remove("change");
    dark.classList.remove("block");
    document.getElementById("pn").classList.remove("pn-color");
    light.style.display = "flex";
    document.getElementById("onpage").classList.remove("pageOn");
    document.getElementById("error-page").classList.remove("error");
})
// event handler
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        app();
    }
})
function closeMore() {
    more.classList.remove("show-more");
    body.classList.remove("stuck");
}
function closeMovie() {
    trailer.classList.remove("show-trailer");
    body.classList.remove("stuck");
}
document.getElementById("close").addEventListener("click", () => {
    trailer.classList.remove("show-trailer");
    body.classList.remove("stuck");
})
function watchTrailer(video) {
    trailer.classList.add("show-trailer");
    body.classList.add("stuck");
    let vid = '';
    async function videos() {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${video}/videos?api_key=${apikey}&language=en-US`);
        return res.json().then((data) => {
            const movieInfos = data.results;
            if (movieInfos === undefined) {
                alert()
            }
            for (let index = 0; index < movieInfos.length; index++) {
                vid += `
                    <div class="player">
                        <h1>${movieInfos[index].name}</h1>
                        <iframe src=${videoURL}${movieInfos[index].key} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="line"></div>
                    <div class="close" onclick="closeMovie()">
                        <img src='./Images/close.svg'/>
                    </div>
                `;
            }
            document.getElementById("video-trailer").innerHTML = vid;
        }).catch((err) => {
            return err;
        })
    }
    videos();
}
function readMore(idx) {
    more.classList.add("show-more");
    body.classList.add("stuck");
    let text = '';
    async function moreInfos() {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&page=${page.value}&include_adult=false&query=${searchInput.value}`);
        return res.json().then((data) => {
            let findId = data.results;
            for (let i = 0; i < findId.length; i++) {
                if (findId[i].id === idx) {
                    text += `
                        <div class="another">
                            <div class="more-text">
                                <img src=${image}${findId[i].poster_path} alt=${findId[i].original_title} height="250px"/>
                                <h1>${findId[i].original_title}</h1>
                                <p style="font-size: 18px; color: rgb(200,200,200)">${findId[i].overview}</p>
                                <div class="lang">
                                <i style="padding: 0.5em 0;">Language: ${findId[i].original_language.toUpperCase()}</i>
                            </div>
                            </div>
                            <section class="rate">
                                <div class="rate-value">
                                    <i class="fa fa-star"></i>
                                    <i id="rate-number">${findId[i].vote_average}</i>
                                </div>
                                <p>Voter: ${findId[i].vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </section>
                        </div>
                        <div class="close" onclick="closeMore()">
                            <img src='./Images/close.svg'/>
                        </div>
                    `;
                }
            }
            document.getElementById("more").innerHTML = text;
        }).catch((err) => {
            return err;
        })
    }
    moreInfos();
}

let page = document.getElementById("pagination");

page.addEventListener("input", (e) => {
    let x = e.target.value;
    if (x < 0) {
        page.value = 1;
    }
})
let pageX = document.getElementById("error-page");
function app() {
    async function smovie() {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&page=${page.value}&include_adult=false&query=${searchInput.value}`);
        return res.json().then((data) => {
            let finding = data.results;
            let display = '';
            // page.addEventListener("input", (e) => {
            //     let p = e.target.value;
            //     if (p > data.total_pages) {
            //         page.value = data.total_pages;
            //     }
            // })
            let mypage = data.total_pages;
            if (page.value > mypage) {
                page.value = mypage;
            }
            if (searchInput.value == '') {
                document.getElementById("error").innerHTML = 'Please input a movie title!'
                document.getElementById("error").style.display = "block";
            }
            for (let i = 0; i < finding.length; i++) {
                display += `
                    <div class="item">
                        <div class="image" style="background: url(${image}${finding[i].poster_path}); width: 300px; height: 60vh; background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
                        <div class="title-date">
                            <h1>${finding[i].original_title}</h1>
                            <div class="date">
                                <i>Releases on: <b>${finding[i].release_date}</b></i>
                            </div>
                            <button onclick="readMore(${finding[i].id})">Read More</button>
                            <button onclick="watchTrailer(${finding[i].id})" id="trailer">Watch Trailer</button>
                        </div>
                    </div>
                `
            }
            document.getElementById("search-key").innerHTML = '#search: ' + searchInput.value;
            document.getElementById("pages").innerHTML = '#pages: ' + data.total_pages;
            document.getElementById("onpage").innerHTML = 'You are on page: ' + page.value;
            movie.innerHTML = display;
            console.log(finding)
        }).catch((err) => {
            return err;
        })
    }
    smovie();
}
searchInput.addEventListener("input", (e) => {
    e.preventDefault()
    page.value = 1;
})
page.addEventListener("keypress", (pages) => {
    if (pages.key === "Enter") {
        app();
    }
})
searchButton.addEventListener("click", () => {
    app();
});
app();