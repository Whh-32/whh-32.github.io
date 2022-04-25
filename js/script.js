let nav = document.querySelector("header");
let customScroll = document.querySelectorAll(".customScroll > ul > li");
let parts = document.querySelectorAll(".parts");

window.addEventListener("scroll", checkScroll);
let scroll = 0;
function checkScroll() {
    newScroll = this.scrollY
    if (newScroll > scroll) {
        nav.style.top = "-70px"
    } else {
        nav.style.top = "0px"
    }
    scroll = newScroll
}

for (let i = 0; i < customScroll.length; i++) {
    customScroll[i].addEventListener("click", () => {
        window.scrollTo(0, parts[i].offsetTop);
        customScroll.forEach(element => {
            element.classList.remove("active");
        });
        customScroll[i].classList.add("active");
    })
}
