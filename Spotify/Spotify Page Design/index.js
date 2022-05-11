const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
bars.addEventListener("click", menuBars);

function menuBars() {
    bars.classList.toggle("rotate-bars");
    menu.classList.toggle("show-menu");
    document.querySelector("body").classList.toggle("stuck-on-scroll");
}
