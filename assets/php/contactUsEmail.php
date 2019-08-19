<?php
    // header("Access-Control-Allow-Origin: *");
	// Contact
	$to 	= "ryan.noble82@gmail.com";
	$from	= "website_inquiry@weloveallpets.com";

	if(isset($_POST["c_fullname"]) && isset($_POST["c_emailreplyto"]) && isset($_POST["c_subject"]) && isset($_POST["c_message"])){
		$fullname   = $_POST["c_fullname"];
		$useremail  = $_POST["c_emailreplyto"];
		$subject    = $_POST["c_subject"];
		$message    = $_POST["c_message"];

		if (mail($to, $subject, $message, $useremail, $from)) {
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