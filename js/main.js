$(document).ready(function () {
    $('.zoom').hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
});

const hamburger = document.querySelector(".hamburger");
console.log(hamburger)
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    console.log("entro aca")
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))