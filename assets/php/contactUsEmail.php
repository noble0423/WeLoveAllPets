<?php
    // header("Access-Control-Allow-Origin: *");
	// Contact
	$to = "admin@weloveallpets.com";

	if(isset($_POST["c_firstname"]) && isset($_POST["c_lastname"]) && isset($_POST["c_email"]) && isset($_POST["c_subject"]) && isset($_POST["c_message"])){
		$firstname  = $_POST["c_firstname"];
		$lastname	= $_POST["c_lastname"];
		$fullname	= $_POST["c_fullname"];
		$from		= $_POST["c_emailreplyto"];
		$subject    = $_POST["c_subject"];
		$message    = $_POST["c_message"];
		$headers	= array(
			"topper" => "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
			"fullname" => $fullname,
			"email" => $from,
			"bottom" => "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
		);
		$headers = implode("\r\n", $headers);

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