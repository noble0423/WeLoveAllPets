<?php

	// Contact
	$to = "admin@weloveallpets.com";

	if(isset($_POST["c_fullname"]) && isset($_POST["c_email"]) && isset($_POST["c_subject"]) && isset($_POST["c_message"])){
		$name	= $_POST["c_fullname"];

		$from		= $_POST["c_email"];

		$message    = "
					<html>
					<head>
					<title>HTML EMAIL</title>
					</head>
					<body>
					<h4>The following message was sent from the Contact Form on www.weloveallpets.com:</h4>
					<p>
					";
		$message   .= $_POST["c_message"];
		$message   .= "
					</p>
					<br>
					<p><u>Customer Name: </u> {$name}<br>
					*** Hitting <i>'reply'</i> will send a reply email to the following address: {$from}</p>
					</body>
					</html>
					";

		$subject    = "Website Inquiry - '";					
		$subject   .= $_POST["c_subject"];
		$subject   .= "'";

		$headers 	= "MIME-Version: 1.0" . "\r\n";
		$headers   .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers   .= "From: {$name} <website-inquiry_no-reply@weloveallpets.com>" . "\r\n";
		$headers   .= "Reply-To: {$from}" . "\r\n";		

		if (mail($to, $subject, $message, $headers)) {
			$result = array(
				"message" => "Thank you very much for your email! One of our friendly staff members will reach out to you shortly.",
				"sendstatus" => 1
				);
			echo json_encode($result);
		} else {
			$result = array(
				"message" => "Sorry, something is wrong",
				"sendstatus" => 1
				);
			echo json_encode($result);
		}
	}

?>