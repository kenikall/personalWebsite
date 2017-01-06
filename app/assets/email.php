<html>
<body>
  <?php
    $to = $_REQUEST['email-address'];
    $subject = $_REQUEST['subject'];
    $header = "Thank you for contacting MannahCodes@gmail.com";
    $message = $_REQUEST['email-message'];
    $footer = "Follow me
    www.linkedin.com/in/kenikall
    www.facebook.com/mannahcodes
    www.twitter.com/mannahKallon
    www.github.com/kenikall
    "
    $sent = mail($to, $subject, $header, $message, $footer)
    if($sent){'<p>Message sent</p>'}
    else{'<p>Message failed</p>'}
  ?>
</body>
</html>>
