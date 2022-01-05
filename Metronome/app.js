import Timer from './timer.js';


const planningBtn = document.querySelector('.planning__add span');
const planningTitle= document.querySelector('.planning__add input');
const planningList = document.querySelector('.planning__list');
let dele = document.querySelector('.dele');

// ====================================================

const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

const click1 = new Audio('click1.mp3');
const click2 = new Audio('click2.mp3');

let bpm = 150;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;
let tempoTextString = 'Medium';


decreaseTempoBtn.addEventListener('click', decrease);
increaseTempoBtn.addEventListener('click', increase);

document.addEventListener('keydown', event=> {
    
    if (event.key == 'ArrowRight') {
      increase()
    } else if(event.key == 'ArrowLeft'){
        decrease()  
    }

});

function decrease(){
    if (bpm <= 20) { return };
    bpm--;
    validateTempo();
    updateMetronome();
}

function increase(){
    if (bpm >= 280) { return };
    bpm++;
    validateTempo();
    updateMetronome();
}


// ===== plan
planningBtn.addEventListener('click', addName)
document.addEventListener('keyup', event=> {if (event.key == 'Enter') addName()});


function addName(){
    if(planningTitle.value === ''){
        planningTitle.value = tempoSlider.value
    }
    planningTitle.classList.remove('empty');
    let li = document.createElement('li');
    let liSpan = document.createElement('span');
   
    liSpan.classList.add('planning__tempo')
    liSpan.setAttribute('bit',tempoSlider.value )
    liSpan.innerText = " | темп: " + tempoSlider.value;

   li.innerText = planningTitle.value;
   li.classList.add('planning__name')
   li.appendChild(liSpan)
   planningList.append(li)

   li.setAttribute('bit',tempoSlider.value )

   localStorage.setItem(planningTitle.value, +tempoSlider.value);
 

    planningTitle.value = "";
    }

tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    validateTempo();
    updateMetronome();
});

function hide(e){
    // e.target ссылается на кликнутый <li> элемент

    if(e.target){
    bpm = e.target.getAttribute('bit')
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;
    metronome.timeInterval = 60000 / bpm;
    if (bpm <= 40) { tempoTextString = "Super Slow" };
    if (bpm > 40 && bpm < 80) { tempoTextString = "Slow" };
    if (bpm > 80 && bpm < 120) { tempoTextString = "Getting there" };
    if (bpm > 120 && bpm < 180) { tempoTextString = "Nice and Steady" };
    if (bpm > 180 && bpm < 220) { tempoTextString = "Rock n' Roll" };
    if (bpm > 220 && bpm < 240) { tempoTextString = "Funky Stuff" };
    if (bpm > 240 && bpm < 260) { tempoTextString = "Relax Dude" };
    if (bpm > 260 && bpm <= 280) { tempoTextString = "Eddie Van Halen" };
    tempoText.textContent = tempoTextString;
    // let planNames = document.querySelectorAll(".shud__title");
    // planNames.forEach(check=>{
    //     check.addEventListener('click', function(){
    //         tempoText.innerHTML  =check.textContent
            
    //             })
    // })
  } 
    return false

    }
  
  planningList.addEventListener('click', hide, false);

// ======================




document.addEventListener('keydown', event=> {
    if (event.key == 'ArrowUp'){
        addBeat()
    }else if(event.key == 'ArrowDown'){
        subtractBeat()
    } 
});



subtractBeats.addEventListener('click', subtractBeat);

function subtractBeat(){
    if (beatsPerMeasure <= 2) { return };
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
}

function addBeat(){
    if (beatsPerMeasure >= 12) { return };
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
}

addBeats.addEventListener('click', addBeat);


// document.addEventListener('keydown', event=> {if (event.key == ' ') action()});
startStopBtn.addEventListener('click', action);


function action(){
    count = 0;
    if (!isRunning) {
        metronome.start();
        isRunning = true;
        startStopBtn.textContent = 'STOP';
    } else {
        metronome.stop();
        isRunning = false;
        startStopBtn.textContent = 'START';
    }
}

function updateMetronome() {
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;
    metronome.timeInterval = 60000 / bpm;
    if (bpm <= 40) { tempoTextString = "Super Slow" };
    if (bpm > 40 && bpm < 80) { tempoTextString = "Slow" };
    if (bpm > 80 && bpm < 120) { tempoTextString = "Getting there" };
    if (bpm > 120 && bpm < 180) { tempoTextString = "Nice and Steady" };
    if (bpm > 180 && bpm < 220) { tempoTextString = "Rock n' Roll" };
    if (bpm > 220 && bpm < 240) { tempoTextString = "Funky Stuff" };
    if (bpm > 240 && bpm < 260) { tempoTextString = "Relax Dude" };
    if (bpm > 260 && bpm <= 280) { tempoTextString = "Eddie Van Halen" };

    tempoText.textContent = tempoTextString;
    dele.innerHTML = "clear all"
}
function validateTempo() {
    if (bpm <= 20) { return };
    if (bpm >= 280) { return };
}

function playClick() {
    if (count === beatsPerMeasure) {
        count = 0;
    }
    if (count === 0) {
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count++;
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });





if(localStorage.getItem  == null || localStorage.getItem  == undefined || localStorage.getItem  == " "){

 
}  else if(localStorage.getItem  !== null || localStorage.getItem  !== undefined || localStorage.getItem  !== " "){
         
     

for (const key in localStorage) {


    const element = localStorage.getItem(key);
    
        let li = document.createElement('li');
        let planTitle = document.createElement('span');
        let liSpan = document.createElement('span');
        planTitle.classList.add('shud__title')
    
        liSpan.classList.add('planning__tempo');
        li.classList.add('planning__name')
    
        if( element === null || element === undefined) {break}

        liSpan.setAttribute('bit', element);
        planTitle.setAttribute('bit', element )

        planTitle.append(key)
        li.append(planTitle);
   
        liSpan.append(" | темп: " + element)
        
        li.append(liSpan)
        
      
        planningList.append(li)

        dele.innerHTML = "clear all"
    
}

}


dele.addEventListener("click", ()=>{
    localStorage.clear();
    window.location.reload()
})
