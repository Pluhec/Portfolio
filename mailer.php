<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your-email@example.com";
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email;

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Message sent successfully!</p>";
    } else {
        echo "<p>Failed to send the message.</p>";
    }
}
?>



