<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Validate form data (ensure all fields are filled)
  if (empty($name) || empty($phone) || empty($email) || empty($subject) || empty($message)) {
    // Handle the error case (e.g., display an error message)
    echo 'Please fill in all fields.';
  } else {
    // Prepare email content
    $to = 'cristellebarbeau4@gmail.com';  // Replace with the recipient email address
    $subject = 'Rewind Query';
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nSubject: $subject\nMessage: $message";
    
    // Set additional headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
      // Send a success response to the user
      echo 'Thank you! Your message has been sent.';
    } else {
      // Handle the error case
      echo 'There was an error sending your message. Please try again later.';
    }
  }
}
?>
