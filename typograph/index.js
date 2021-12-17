let out = document.querySelector(".out");
let checkingText = document.querySelector(".text");

let btn = document.querySelector(".btn");
let copy = document.querySelector(".copy");
let deleteText = document.querySelector(".deleteText");


btn.addEventListener("click", () => {
    const search = " " + "\"";
    const replaceWith = ' «';
    let str = " " + checkingText.value ;
    const result = str.replaceAll(search, replaceWith);
    next(result);
});



function next(text) {
    search = '\"';
    replaceWith = '»';
    result = text.replaceAll(search, replaceWith);
    test(result);
}
checkingText.addEventListener('focus', ()=>{
    
    btn.removeAttribute('disabled');

});

    if(checkingText.value !== ""){
    btn.removeAttribute('disabled');
} else{
    btn.setAttribute('disabled', 'true');
}



function test(text) {
    var search = ['\n' + "»"];
    const replaceWith = ['\n' +'«'];
    const result = text.replaceAll(search, replaceWith);
    let checkingText = document.querySelector(".text");
    checkingText.value = result.trim();
    // checkingText.classList.add('access');
}

copy.addEventListener('click', function () {
    let copyText = checkingText.value;
        if (copyText === '')        return;
        
navigator.clipboard.writeText(copyText);
    copy.setAttribute('value', 'Скопировано');
    copy.setAttribute('disabled', 'true');
    
    setTimeout(() => {
        copy.setAttribute('value', 'Скопировать');
        copy.removeAttribute('disabled');
    }, 2000);
});

deleteText.addEventListener('click', ()=>{
    checkingText.value = '';
    if(checkingText.value === ''){
        checkingText.setAttribute('placeholder', 'Введите текст');
    }
})