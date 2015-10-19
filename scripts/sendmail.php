<?php   

$name = htmlspecialchars($_POST['form-name']);
$email = htmlspecialchars($_POST['form-email']);
$message = htmlspecialchars($_POST['form-message']);

$ip = $_SERVER['REMOTE_ADDR'];

$response = array();

	$response = array(
			'valid' => true,
			'msg' => '<p><strong>Your message was successfully sent. Thanks!<strong></p>'
		);

	if(!$name) {
		$response = array(
			'valid' => false,
			'msg' => "<p>You need to write your name.</p>"
		);

		if(!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$response = array(
				'valid' => false,
				'msg' => "<p>You need to write your name.</p>
						  <p>You need to enter a valid email address.</p>"
			);

			if(!$message) {
				$response = array(	
					'valid' => false,
					'msg' => "<p>You need to write your name.</p>
							  <p>You need to enter a valid email address.</p>
							  <p>You need to write a message.</p>"
				);
			}
		}
	} else if(!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$response = array(
			'valid' => false,
			'msg' => "<p>You need to enter a valid email address.</p>"
		);

		if(!$message) {
			$response = array(
				'valid' => false,
				'msg' => "<p>You need to enter a valid email address.</p>
						  <p>You need to write a message.</p>"
			);
		}
	} else if(!$message) {
		$response = array(
			'valid' => false,
			'msg' => "<p>You need to write a message.</p>"
		);
	}

	if($response['valid']){
		$formMessage = "Name: $name \n Email: $email \n Message: $message \n IP: $ip" ;
        //$confirmMessage = "$name, \nThank you for your message! This email is to confirm that your message has been sent. I will get back to you ASAP. \n - Matt";

		mail("matt@mattjenningsdigital.com", "Contact Form Submission", "$formMessage", "From: $email");
	}

	echo json_encode($response);

?>
