$(document).ready(function() {
    
    $(document).on("click", "#modal-close-button", function(event) {
        console.log("clicked modal close");
        // event.preventDefault();
        
        $("#contact-us-form").trigger("reset");
    });
    
    // Email validation
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    // Contact form ajax
    $("#contact-send-button").click(function(event) {

        event.preventDefault();

        var c_firstname = $("#c_firstname").val();
        var c_lastname = $("#c_lastname").val();
        var c_email = $("#c_email").val();
        var c_subject = $("#c_subject").val();
        var c_message = $("#c_message").val();
        var responseMessage = $("#contact-us-form .email-ajax-response");

        var c_fullname = `Name: ${c_firstname} ${c_lastname}`
        var c_emailreplyto = `Customer's Email Address: ${c_email}`

        if (( c_firstname === "" || c_lastname === "" || c_email === "" || c_subject === "" || c_message === "") || (!isValidEmailAddress(c_email) )) {
            responseMessage.fadeIn(500);
            responseMessage.html('<i class="fa fa-warning"></i> An error has occured. Please check form fields and try again.');
        }

        else {
            $.ajax({
                type: "POST",
                url: "assets/php/contactUsEmail.php",
                dataType: "json",
                data: {
                    c_emailreplyto: c_emailreplyto,
                    c_fullname: c_fullname,
                    c_subject: c_subject,
                    c_message: c_message
                },
                beforeSend: function(result) {
                    $("#contact-us-form button").empty();
                    $("#contact-us-form button").append('<i class="fa fa-cog fa-spin"></i> Wait...');
                },
                success: function(result) {
                    if(result.sendstatus == 1) {
                        $("#contact-us-form .ajax-hidden").fadeOut(250);
                        responseMessage.html(result.message).fadeIn(1000);
                        $("#contact-us-form").trigger("reset");
                    } else {
                        $("#contact-us-form button").empty();
                        $("#contact-us-form button").append('<i class="fa fa-retweet"></i> Try again.');
                        responseMessage.html(result.message).fadeIn(1000);
                    }
                }
            });
        }

        return false;
        

    });
});