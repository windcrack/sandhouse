<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = isset($_POST['name']) ? clean($_POST['name']) : null;
	$phone = isset($_POST['phone']) ? clean($_POST['phone']) : null;
	$text = isset($_POST['text']) ? clean($_POST['text']) : null;
	if( $name && $phone ){ //Проверка отправилось ли наше поля name и не пустые ли они
		$result = [
			'commonString_1' => 'commonString_1 value',
			'commonString_2' => 'commonString_2 value',
			'commonString_3' => 'commonString_3 value'
		];
		$to = 'windcrack@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
		$subject = 'Заявка на дом'; //Заголовок сообщения
		$message = '
			<html>
			    <head>
				<title>'.$subject.'</title>
			    </head>
			    <body>
				<p>Имя: '.$name.'</p>
				<p>Телефон: '.$phone.'</p>                       
				<p>Сообщения: '.$text.'</p>                       
			    </body>
			</html>'; //Текст нащего сообщения можно использовать HTML теги
		$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
		$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
		if (mail($to, $subject, $message, $headers)) {
			// any data can be used on front-end form response
			$result = [
				'success' => true, // sending mail flag
				'successedMailingString_1' => 'successedMailingString_1 value', // example of successed mailing if needed
			];
		}
		else {
			// any data can be used on front-end form response
			$result = [
				'success' => false, // sending mail flag
				'failedMailingString_1' => 'failedMailingString_1 value', // example of failed mailing if needed
			];
			
			/*
			 * as additional things here we can do some reports 
			 * and so on
			*/
		}
		// making json encoding and pushing data back
		echo json_encode($result);
	}
}
else {
	header($_SERVER["SERVER_PROTOCOL"]." 405 Method Not Allowed"); 
}
function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}
