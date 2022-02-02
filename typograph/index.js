let out = document.querySelector(".out");
let checkingText = document.querySelector(".text");

let btn = document.querySelector(".btn");
let copy = document.querySelector(".copy");
let deleteText = document.querySelector(".deleteText");


checkingText.addEventListener('input', ()=>{
    
    btn.removeAttribute('disabled');
    checkingText.classList.remove('access');
    checkingText.classList.remove('access-copy');

});

checkingText.addEventListener('change', ()=>{
    
    btn.removeAttribute('disabled');
    checkingText.classList.remove('access');
    checkingText.classList.remove('access-copy');

});

function startText(){
    btn.removeAttribute('disabled');
    
}

btn.addEventListener("click", () => {
    
         if(checkingText.value !== " "){
             germanLeft();
         } 
  else {
      alert('поле не должно быть пустым')
  }

   
});


//german

function germanLeft(){
    const search = "„";
    const replaceWith = ' «';
    let str = "<p>" + checkingText.value ;
    const result = str.replaceAll(search, replaceWith);
    germanRight(result);
}


function germanLeftEdit(){
        const search = "„";
    const replaceWith = ' «';
    let str = out.textContent ;
    const result = str.replaceAll(search, replaceWith);
    germanRight(result);
}

function germanRight(text) {
    search = "“";
    replaceWith = '»';
    result = text.replaceAll(search, replaceWith);
    englandLeft(result);
}

//england
function englandLeft(text){
    const search = " "+"“";
    const replaceWith = ' «';
    let str = " " + text ;
    const result = str.replaceAll(search, replaceWith);
    englandRight(result);
}

function englandRight(text) {
    search = "”";
    replaceWith = '»';
    result = text.replaceAll(search, replaceWith);
    next(result);
}

function next(text) {
    search = '\"';
    replaceWith = '»';
    result = text.replaceAll(search, replaceWith);
    reverseSymbol(result);
}




function reverseSymbol(text) {
    var search = ['\n' + "»"];
    const replaceWith = ['«'];
    const result = text.replaceAll(search, replaceWith);
    reverseSymbol2(result);
}

function reverseSymbol2(text) {
    var search = [' ' + "»"];
    const replaceWith = [' ' +'«'];
    const result = text.replaceAll(search, replaceWith);
    addParagraph(result)
}

function addParagraph(text){
       var search = [''+'\n'];
       const replaceWith = ['</p><p>'];
       const result = text.replaceAll(search, replaceWith);
    let checkingText = document.querySelector(".text");
 
    checkingText.classList.add('hidden');
//    copy.classList.remove("hidden");
    out.classList.remove("hidden");
    out.innerHTML = result;
    dublParag();
}

function dublParag(){
    let p = document.querySelectorAll('p');
    p.forEach(el=>{
         if(el.textContent == ""){
       el.remove();
    }
    })
   
    
}


// copy text
copy.addEventListener('click', function () {
    let copyText = out.innerText ;
        if (copyText === '')        return;
    
    
    
    
        
navigator.clipboard.writeText(copyText).then(function(){
    copy.setAttribute('value', 'Скопировано');
    copy.setAttribute('disabled', 'true');
    checkingText.classList.add('access-copy');
    setTimeout(() => {
//        copy.setAttribute('value', 'Скопировать');
        copy.removeAttribute('disabled');
    }, 2000);
});
    
});

deleteText.addEventListener('click', ()=>{
    checkingText.value = '';
     checkingText.classList.remove('hidden');
     out.classList.add('hidden');
    if(checkingText.value === ''){
        checkingText.classList.remove('access');
        checkingText.classList.remove('access-copy');
        checkingText.setAttribute('placeholder', 'Введите текст');
        copy.classList.add("hidden");
    }
});


document.onblur = function(){
    document.title = "ЗАМЕНА"
}


document.onfocus = function(){
    document.title = "Замена прямых кавычек на елечки онлайн || Заменить кавычки";
}
