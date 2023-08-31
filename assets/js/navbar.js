let nav = document.getElementById("navbar");
let navItem = document.querySelectorAll("a.nav-link");
let x = window.innerWidth
console.log(x);
if (x < 500){
    document.querySelector("section#promo div").classList.remove("justify-content-between");
}
if (x < 992){
    document.querySelector(".navbar-toggler").classList.add("d-none");
}

window.onscroll = function() {navBG()};

function navBG(){
    if (document.documentElement.scrollTop > 5) {
        document.querySelector(".navbar-toggler").classList.remove("d-none");
        nav.style.backgroundColor = "rgb(126, 170, 146)";
        navItem[0].style.color = "white";
        navItem[1].style.color = "white";
        navItem[2].style.color = "white";
        navItem[3].style.color = "white";
        navItem[4].style.color = "white";
    }
    else {
        document.querySelector(".navbar-toggler").classList.add("d-none");
        nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
        navItem[0].style.color = "black";
        navItem[1].style.color = "black";
        navItem[2].style.color = "black";
        navItem[3].style.color = "black";
        navItem[4].style.color = "black";
    }
}

