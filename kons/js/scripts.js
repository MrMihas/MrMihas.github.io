// let btnForm = document.querySelector('.user-confirm button');
let checkboxForm = document.querySelector('.user-confirm__checkbox');


if(checkboxForm.checked){
    alert('Письмо отправлено. Ждите звонка');
    $( document ).ready(function() {
    $("#btn__form").click(
        function(){
            sendAjaxForm('result_form', 'send__Form', 'sendForm.php');
            return false; 
        }
    );
});
 
function sendAjaxForm(result_form, send__Form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+send__Form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
    }
} else {
    alert();
}



