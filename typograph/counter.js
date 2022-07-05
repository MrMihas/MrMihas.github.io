let date = new Date();
let registDate = `${date.getDate()}.${date.getMonth()+1}.${date.getUTCFullYear()} `
let out =  document.querySelector("#out");
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
            string.replace(/(\s)[^/n]/g, function (a) {
               // For each word found increase the counter value by 1
                  counter++;
            });

           return  calc = +counter;
        }

      var numberWords = countWordsString(string.value.trim());

});

btn.addEventListener("click", () => {
    if(string.value.trim() != "") {
        calculate(calc)
    }

});



function calculate(value){
    countOut.append(sessionStorage.getItem('counter'))

   if(sessionStorage.getItem('counter') == undefined || sessionStorage.getItem('date') == undefined){
         sessionStorage.setItem('date', registDate);

         if( value > 1){
            sessionStorage.setItem('counter', value);

}

   } else if(sessionStorage.getItem('counter')){

      let total = +sessionStorage.getItem('counter') + +value;
      sessionStorage.setItem('counter', total);

   }
 
}


if(sessionStorage.getItem('counter')){

    countOut.append(sessionStorage.getItem('counter'))
}