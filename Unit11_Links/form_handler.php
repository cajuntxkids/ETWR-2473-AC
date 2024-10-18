<?php
// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $tour_group = htmlspecialchars(trim($_POST['tour_group']));
    $tour_date = htmlspecialchars(trim($_POST['tour_date']));
    $comments = htmlspecialchars(trim($_POST['comments']));

    // Email details
    $to = "angie.creel@g.austincc.edu"; // Replace with your email address
    $subject = "New Tour Booking Request from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Email body
    $message = "<h1>New Tour Booking Request</h1>";
    $message .= "<p><strong>Name:</strong> $name</p>";
    $message .= "<p><strong>Email:</strong> $email</p>";
    $message .= "<p><strong>Phone:</strong> $phone</p>";
    $message .= "<p><strong>Tour Group Size:</strong> $tour_group</p>";
    $message .= "<p><strong>Preferred Tour Date:</strong> $tour_date</p>";
    $message .= "<p><strong>Comments:</strong> $comments</p>";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "<h2>Thank you! Your booking request has been sent successfully.</h2>";
    } else {
        echo "<h2>Sorry, there was a problem sending your request. Please try again later.</h2>";
    }

} else {
    echo "<h2>Invalid request. Please submit the form.</h2>";
}
?>
