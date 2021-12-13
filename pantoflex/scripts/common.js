let menu = document.querySelector(".navigation__list");
let nav__bar = document.querySelector(".show-menu");

// menuBtn.onclick = function () {
//     showMenu();
// }

function resizeFunc() {
    let width = document.body.clientWidth;
    if (width > 768) {
        if (menu.getAttribute("class").indexOf("active") == -1) {
            console.log("sda");
        } else {
            menu.classList.remove("active");
        }
    }

}

window.addEventListener('resize', function () {
    let width = document.body.clientWidth;
    if (width > 768) {
        if (menu.getAttribute("class").indexOf("active") != -1)
            menu.classList.remove("active");
        if (nav__bar.getAttribute("class").indexOf("active") != -1)
            nav__bar.classList.remove("active");



    }
});





nav__bar.onclick = function (e) {
    e.preventDefault();
    menu.classList.toggle("active");
    nav__bar.classList.toggle("active");
}