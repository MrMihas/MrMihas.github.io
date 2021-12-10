// change language

// let languages = document.querySelectorAll('.language--change');



// for (let i = 0; i < languages.length; i++) {

    

//     languages[i].addEventListener('click', function(){

//         var current = document.querySelectorAll(".active");

//         current[0].className = current[0].className.replace(" active", "");

//         this.className += " active";

//     });

    

// }



// videoplayer



// let playVideo  = document.querySelector('#play');

// let pauseVideo = document.querySelector('#pause');





// playVideo.addEventListener('click', play);

// pauseVideo.addEventListener('click', pause);



// let video = document.querySelector('#video-player');

// video.volume = 0;



// playVideo.style.display = "block";

// pauseVideo.style.display = "none";



// function play(){

//     video.play();

//     playVideo.style.display = "none";

//     pauseVideo.style.display = "block";

//     }

    

    

    

//     function pause() { 

//     video.pause();

//     pauseVideo.style.display = "none";

//     playVideo.style.display = "block";

//     }



    // move btn



//     let moveArea = document.querySelector('.hero__player');

//     let moveElement = document.querySelector('.control--btns');

//     let mouseX;

//     let mouseY;

    

//     function onMouseMove(e){

//         mouseX = e.pageX;

//         mouseY = e.pageY - 176;

//         let crd = moveArea.getBoundingClientRect();

//         let activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

        

//         requestAnimationFrame(function movePointer() {

//             moveElement.removeAttribute('style');

//                 moveElement.style.left = Math.floor(mouseX) + 'px' ;

//                 moveElement.style.top = Math.floor(mouseY) + 'px';

            

//         });





// }



// function disablePointer() {

// requestAnimationFrame(function hidePointer() {

//     moveElement.removeAttribute('style');

//     moveElement.style.right = 60 + 'px' ;

//     moveElement.style.bottom = 60 + 'px';

// });



//     }



   



    



//     if (window.innerWidth > 1200 ) {

//     moveArea.addEventListener('mousemove', onMouseMove, false);

//     moveArea.addEventListener('mouseleave', disablePointer, false);

//   }





    const anchors = document.querySelectorAll('a[href*="#"]')



for (let anchor of anchors) {

  anchor.addEventListener('click', function (e) {

    e.preventDefault()

    

    const blockID = anchor.getAttribute('href').substr(1)

    

    document.getElementById(blockID).scrollIntoView({

      behavior: 'smooth',

      block: 'start'

    })

  })

}



// modal

let btn = document.querySelector(".show__modal");
let close = document.querySelector(".close__modal");
let layer = document.querySelector(".layer__black");
let modal = document.querySelector(".modal");

btn.addEventListener('click', function(e){
	e.preventDefault();
	layer.classList.add("show");
	modal.classList.add('showIt')
})

close.addEventListener('click', function(e){
	e.preventDefault();
	
	setTimeout(()=>{
		layer.classList.remove("show")
		modal.classList.remove('showIt')
		modal.classList.remove('hideIt')
	},1000)
	modal.classList.add('hideIt')
	
})