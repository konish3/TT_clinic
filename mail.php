<?php
    use PHPMailer/PHPMailer/PHPMailer;
    use PHPMailer/PHPMailer/Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('info@mail.ru');

    $mail->addAddress('rbru-metrika@yandex.ru')

    $body.='<p>Почта: '.$_POST['email'].'<p>';
    $body.='<p>Телефон: '.$_POST['phone'].'<p>';

    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'OK!'
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>