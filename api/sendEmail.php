<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 1) Read the JSON input
    $rawInput = file_get_contents("php://input");
    $data = json_decode($rawInput, true);

    // 2) Extract fields safely
    $name     = htmlspecialchars($data['name']     ?? '');
    $email    = htmlspecialchars($data['email']    ?? '');
    $message  = htmlspecialchars($data['message']  ?? '');
    $formType = htmlspecialchars($data['formType'] ?? '');

    // Optional fields
    $subject  = htmlspecialchars($data['subject']  ?? '');
    $company  = htmlspecialchars($data['company']  ?? '');
    $date     = htmlspecialchars($data['date']     ?? '');

    // 3) Build email
    $to = "mhdhusamtakaji@gmail.com"; // Your receiving email
    $email_subject = "New Submission: $formType";

    $email_body  = "Form Type: $formType\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n\n";

    // Append the optional field relevant to the form type
    if ($formType === 'Request a Quote') {
        $email_body .= "Project Title/Subject: $subject\n";
    } elseif ($formType === 'Make a Job Offer') {
        $email_body .= "Company Name: $company\n";
    } elseif ($formType === 'Schedule an Interview') {
        $email_body .= "Proposed Date: $date\n";
    }

    $email_body .= "\nMessage:\n$message\n";

    // -------------------------------
    // 4) Set up headers
    // -------------------------------
    // Use your own domain-based "From" address (like no-reply@YourDomain.com).
    // Then use the user’s email as the Reply-To address.
    $fromEmail = "no-reply@mhdhusamtakaji.com"; // Or any valid address on your domain

    $headers  = "From: $fromEmail\r\n";
    $headers .= "Reply-To: $email\r\n";
    // Optionally, specify content type (text/plain or text/html)
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // 5) Attempt to send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Failed to send mail()"]);
    }
} else {
    // Wrong method (GET, etc.)
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Invalid request method"]);
}
