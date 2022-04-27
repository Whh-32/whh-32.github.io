let nav = document.querySelector("header");
let customScroll = document.querySelectorAll(".customScroll > ul > li");
let parts = document.querySelectorAll(".parts");

window.addEventListener("scroll", checkScroll);
let scroll = 0;
let newScroll;
function checkScroll() {
    newScroll = this.scrollY
    if (newScroll > scroll) {
        nav.style.top = "-70px"
        menu.classList.remove("active");
        subMenu.classList.remove("active");
    } else if (newScroll == 0) {
        nav.style.top = "0px"
    }
    scroll = newScroll
}

for (let i = 0; i < customScroll.length; i++) {
    customScroll[i].addEventListener("click", () => {
        window.scrollTo(0, parts[i].offsetTop);
    });
    window.addEventListener("scroll", autoScroll);
    function autoScroll() {
        if (newScroll >= (window.innerHeight * i) - window.innerHeight / 2) {
            customScroll.forEach(element => {
                element.classList.remove("active");
            });
            customScroll[i].classList.add("active");
            if (i % 2 !== 0) {
                customScroll.forEach(element => {
                    element.classList.add("dark")
                });
            } else {
                customScroll.forEach(element => {
                    element.classList.remove("dark")
                });
            }
        }
    }
}

let menu = document.querySelector(".menu");
let subMenu = document.querySelector(".subMenu")
menu.addEventListener("click", clickMenu);
function clickMenu() {
    menu.classList.toggle("active");
    subMenu.classList.toggle("active");
}