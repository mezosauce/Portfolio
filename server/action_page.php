<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Name = htmlspecialchars($_POST["Name"]);
    $Email = htmlspecialchars($_POST["Email"]);
    $text = htmlspecialchars($_POST["text"]);
    $message = htmlspecialchars($_POST["Massage"])
    
    echo $Name;
    echo $Email;
    echo $text;
    echo $message;
}