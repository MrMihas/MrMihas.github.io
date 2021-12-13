<?php


header("Content-Type: text/html; charset=utf-8");

$name =  trim(strip_tags($_POST["userName"]));
$tel =  trim(strip_tags($_POST["userPhone"]));
$description =  trim(strip_tags($_POST['userAbout']));


$refferer = getenv('HTTP_REFERER');
$myemail = "mailto:frontend@rgb-agency.com.ua"; 


// Отправка письма администратору сайта

$tema = "Тема письма админу";
$message_to_myemail = 
"Текст письма:
<br><br>
Имя: $name<br>
Телефон: $tel<br>
О проекте:$description <br>
Источник (ссылка): $refferer
";

$send = mail($myemail, $tema, $message_to_myemail, "From: Sitename <reg@wayup.in> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

if($send == 'true')
	{
	    header( "refresh:1;url=/" );
	    
} 

echo 'Письмо отправлено'
?>