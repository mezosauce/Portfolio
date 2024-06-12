<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect input data and sanitize it
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $company = htmlspecialchars($_POST['Company']);
    $message = htmlspecialchars($_POST['Message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Create a formatted string to save to file
    $data = "Name: $name\nEmail: $email\nCompany: $company\nMessage: $message\n\n";

    // Specify the file to save the data
    $file = 'contacts.txt';

    // Append the data to the file
    if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX)) {
        echo "Contact information saved successfully.";
    } else {
        echo "There was an error saving your contact information.";
    }
} else {
    echo "Invalid request method.";
}
?>