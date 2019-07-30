// Menu toggle
let mainNav = document.getElementById("nav-links");

let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener('click', function(){
    mainNav.classList.toggle('active');
});