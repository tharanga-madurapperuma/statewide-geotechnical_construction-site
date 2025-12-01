<?php

// Check if form is submitted and file is uploaded
if (isset($_POST['button']) && isset($_FILES['attachment'])) {

    // Define sender and recipient emails
    $from_email = 'noreply@statewidegeotechnical.com.au'; // Sender email
    $recipient_email = $_POST["to_email"]; // Recipient email

    // Load POST data from form
    $sender_name = $_POST["sender_name"]; // Sender's name
    $reply_to_email = $_POST["sender_email"]; // Reply-to email
    $subject = $_POST["subject"]; // Email subject
    $message = $_POST["message"]; // Email body

    // Validate sender name (uncomment for validation)
    // if (strlen($sender_name) < 1) {
    //     die('Name is too short or empty!');
    // }

    // Get uploaded file data
    $tmp_name = $_FILES['attachment']['tmp_name']; // Temp file path
    $name = $_FILES['attachment']['name']; // Original file name
    $size = $_FILES['attachment']['size']; // File size
    $type = $_FILES['attachment']['type']; // File type
    $error = $_FILES['attachment']['error']; // Upload error

    // Check for upload errors
    if ($error > 0) {
        die('Upload error or no file uploaded');
    }

    // Read the file and encode its content
    echo $tmp_name;
    echo "----";
    echo "----";
    $handle = fopen($tmp_name, "r"); // Open file for reading
    $content = fread($handle, $size); // Read file content
    fclose($handle); // Close file

    // Base64 encode the file content and define boundary
    $encoded_content = chunk_split(base64_encode($content)); // Encode content
    $boundary = md5("random"); // Generate a unique boundary

    // Define email headers
    $headers = "MIME-Version: 1.0\r\n"; // Specify MIME version
    // Set sender email
    $headers .= "From: " . $from_email . "\r\n";
    // Set reply-to email
    $headers .= "Reply-To: " . $reply_to_email . "\r\n";
    // Set content type and boundary
    $headers .= "Content-Type: multipart/mixed; boundary=$boundary\r\n";

    // Construct email body with message and attachment
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($message)); // Encode message

    // Add attachment to the email body
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: $type; name=\"$name\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$name\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "X-Attachment-Id: " . rand(1000, 99999) . "\r\n\r\n";
    $body .= $encoded_content; // Append encoded file content

    foreach ($_FILES['attachment'] as $key => $value) {
        echo ucfirst($key) . ": " . $value . "<br>";
    }

    // Send the email
    $sentMailResult = mail($recipient_email, $subject, $body, $headers);

    // Check if the email was sent successfully
    if ($sentMailResult) {
        echo "<h3>File sent successfully.</h3>";
        // Optionally delete the file after sending
        // unlink($name);
    } else {
        die("Sorry, the email could not be sent. Please try again.");
    }
}
