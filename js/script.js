window.onscroll = function() {
    let nav = document.querySelector(".navbar");
    if(window.scrollY > 100) {
        nav.classList.add("nav-fix");
    }
    else {
        nav.classList.remove("nav-fix");
    }
}