// hide on mobile

let hotkey = document.querySelector(".hotkey");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    hotkey.classList.add('hidden');

} else {
 hotkey.classList.remove('hidden');

}


let hotkeys = document.querySelectorAll(".hotkey h3");

let keys = document.querySelector('.keys');



hotkeys.forEach(el=>{

    el.addEventListener('click', ()=>{

        let next = el.nextElementSibling;

        if (next.getAttribute('class') == "keys active" || next.getAttribute('class') == "manual__codes keys active")  {
            next.classList.remove('active')
            next.classList.add('hide')
        }
        
        
        else{
            next.classList.remove('hide')
            next.classList.add('active')
          
        }
        
        })
        

})



