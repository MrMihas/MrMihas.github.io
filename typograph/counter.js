let date = new Date();
let registDate = `${date.getDate()}.${date.getMonth()+1}.${date.getUTCFullYear()} `;
let calc;
let string =  document.querySelector(".text");
let countOut =  document.querySelector(".amount");

if(sessionStorage.getItem('date') !== registDate){
    sessionStorage.clear();
}



    string.addEventListener('change', ()=>{

   function countWordsString(string){

            let counter = 1;


            // Change multiple spaces for one space
            string=string.replace(/[\s]+/gim, ' ');

            // Lets loop through the string and count the words
            string.replace(/(\s)[^/n\._\-\/\*\(\)]/g, function (a) {
               // For each word found increase the counter value by 1
                  counter++;
            });

           return  calc = +counter;
        }

      var numberWords = countWordsString(string.value.trim());

});

btn.addEventListener("click", () => {
calcFomat(calc);

});

function calcFomat(calc){
        if(string.value.trim() != "") {
        calculate(calc)
    }
}
    




// function calculateText(func, ...codes) {
//       let pressed = new Set();

//       document.addEventListener('keydown', function(event) {
//         pressed.add(event.code);
        

//         for (let code of codes) { // все ли клавиши из набора нажаты?
//           if (!pressed.has(code)) {
//             return;
//           }
//         }

//        pressed.clear();

//         func();
//       });

//       document.addEventListener('keyup', function(event) {
//         pressed.delete(event.code);
//       });

//     }


//     calculateText(
//       () => calcFomat(calc),
//       "ControlLeft",
//       "KeyX"
//     );






function calculate(value){


   if(sessionStorage.getItem('counter') == undefined || sessionStorage.getItem('date') == undefined){
         sessionStorage.setItem('date', registDate);

         if( value > 1){
            sessionStorage.setItem('counter', value);

}

   } else if(sessionStorage.getItem('counter')){

       let total = +sessionStorage.getItem('counter') + +value;
      sessionStorage.setItem('counter', total);

   }

    countOut.innerHTML = '';

    countOut.append(sessionStorage.getItem('counter') + countOut.textContent)
 
}


if(sessionStorage.getItem('counter')){

    countOut.innerHTML = '';

    countOut.append(sessionStorage.getItem('counter') + countOut.textContent)
    
    if(countOut.textContent == null || countOut.textContent == NaN){
        document.location.reload();
    }
}
