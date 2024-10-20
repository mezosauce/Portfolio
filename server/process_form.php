<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $phone = htmlspecialchars($_POST['Phone']);
    $message = htmlspecialchars($_POST['Message']);

    // Create a string with the form data
    $formData = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message\n\n";

    // Specify the file to write to
    $file = 'contact_form_data.txt';

    // Open the file in append mode
    if ($handle = fopen($file, 'a')) {
        // Write the form data to the file
        if (fwrite($handle, $formData)) {
            echo "Thank you! Your message has been sent.";
        } else {
            echo "Sorry, there was an error saving your message. Please try again later.";
        }
        // Close the file
        fclose($handle);
    } else {
        echo "Sorry, we could not open the file to save your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
