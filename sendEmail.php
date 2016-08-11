<?php

$to = "hudsonvurbeff@gmail.com";
$Fname = $_POST['fname'];
$Lname = $_POST['lname'];
$Email = $_POST['email'];
$Sline = $_POST['subjectLine'];
$message = $_POST['message'];
$email   = filter_var($email , FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($message);
    
mail($to, $Sline, $message, "From: " . $Fname . $Lname);
echo "sent";

?>