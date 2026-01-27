<?php
// Basic security: block direct GET access
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit();
}

$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

// Basic validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<h2>Invalid email address.</h2>";
    exit();
}

// File to save emails (one per line)
$file = 'subscribers.txt';

// Append the email to the file
file_put_contents($file, $email . PHP_EOL, FILE_APPEND | LOCK_EX);

// Display success message
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f8f8f5;
      color: #333;
      text-align: center;
      padding: 3rem;
    }
    a {
      display: inline-block;
      margin-top: 2rem;
      color: #5c8a4e;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Thank You for Subscribing!</h1>
  <p>We'll keep you updated with campaign news.</p>
  <a href="index.html">← Back to homepage</a>
</body>
</html>
