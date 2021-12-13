
// toggle menu

let menuBtn = document.querySelector(".header-col-left__hamburger-btn");
let inner = document.querySelector(".hamburger-inner");
let menu = document.querySelector(".navmenu__wrapper");
let primaryContent = document.querySelector(".homepage__main");
let headerMainPage = document.querySelector(".header__main-page");

menuBtn.onclick = e => {
  e.preventDefault();
  menu.classList.toggle("active");
  inner.classList.toggle("active");
  primaryContent.classList.toggle("active");
  headerMainPage.classList.toggle("active");
};

// accordion

let accordionBtn = document.querySelector(".navmenu__accordion-btn");
let hiddenMenu = document.querySelector(".navdrop-list");
let navMenu = document.querySelector(".nav");
let navDrop = document.querySelector(".navdrop");

accordionBtn.onclick = e => {
  e.preventDefault();
  navDrop.classList.toggle("is_active");
  hiddenMenu.classList.toggle("is_active");
  // navMenu.classList.toggle("is_active");

};

// circle

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "150");
svg.setAttribute("height", "150");
svg.setAttribute("viewBox", "0 0 200 200");
svg.setAttributeNS(
  "http://www.w3.org/2000/xmlns/",
  "xmlns:xlink",
  "http://www.w3.org/1999/xlink"
);

var myLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
with(myLine) {
  setAttribute("x1", "100");
  setAttribute("y1", "5");
  setAttribute("x2", "100");
  setAttribute("y2", "15");
  setAttribute("stroke", "#ccc");
  setAttribute("stroke-width", "7");
  setAttribute("transform", "rotate(0,100,100)");
}
var myNodes = [];
var els = 50;
var step = 360 / els;
for (var i = 0; i < els; i++) {
  myNodes[i] = myLine.cloneNode(true);
  myNodes[i].setAttribute("transform", "rotate(" + i * step + ",100,100)");
  svg.appendChild(myNodes[i]);
}

let cardsItem = document.querySelectorAll(".cards__item");


var progressbar = document.getElementById("progressbar");
var counter = document.getElementById("counter");
var count = document.getElementById("count");
var percent;
let res = 0;

for (let i = 0; i < cardsItem.length; i++) {
res = cardsItem.length;
}

    percent = res;
    for (i = 0; i < percent; i++) {
      myNodes[i].setAttribute("stroke", "#94C11A");
    }
    count.innerHTML = percent ;
  



progressbar.appendChild(svg);