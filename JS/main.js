let navbar = document.getElementById("navbar");
let burger = document.getElementById("burger");
let showburger = document.getElementById("showburger");
let buttons = document.getElementById("buttons");

burger.addEventListener("click", function (){
    navbar.classList.toggle("clicked");
    showburger.classList.toggle("clicked");
    buttons.classList.toggle("clicked");
})
