//эффект для кнопки

// const buttons = document.querySelectorAll('.hero__button a');

// buttons.forEach(function(btn){
// btn.addEventListener("click", function(e){

// 	let x = e.clientX - e.target.offsetLeft;
// 	let y = e.clientY - e.target.offsetTop;

// 	let ripples = document.createElement('span');

// 	ripples.style.left = x + 'px';
// 	ripples.style.top = y + 'px';
// 	this.appendChild(ripples);
// 	setTimeout(function(){
// 		ripples.remove();
// 	}, 1000);

// })
// })



// раздел меню

// open and clz menu
const menuLines = document.querySelector(".lines");
const headerFixed = document.querySelector(".header__menu");
menuLines.onclick = function(e){
	e.preventDefault();
	const menu = document.querySelector(".menu__container");

	this.classList.toggle("close");
	menu.classList.toggle("open");
	headerFixed.classList.toggle("fixed");

}




let navLink   = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLink.length; i++) {
	navLink[i].onclick = function(){
		const menu = document.querySelector(".menu__container");
		const menuLines = document.querySelector(".lines");
const headerFixed = document.querySelector(".header__menu");
		menu.classList.remove("open");
		menuLines.classList.remove("close");
		headerFixed.classList.remove("fixed");
	}
}


