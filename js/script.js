window.onscroll = function() {
    let nav = document.querySelector(".navbar");
    if(window.scrollY > 100) {
        nav.classList.add("nav-fix");
    }
    else {
        nav.classList.remove("nav-fix");
    }
}

let navIcon = document.querySelector(".nav-icon-holder");

function showNavigation() {
    this.classList.toggle("nav-icon-clicked");
    let navBarList = document.querySelector(".navbar ul");
    navBarList.classList.toggle("show");
}

navIcon.addEventListener("click", showNavigation);