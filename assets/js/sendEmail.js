function sendMail(contactForm) {
    emailjs.send("service_kvznubj", "template_i6hzmnq", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}

function sendingDone() {
    return alert("You have sent an email! Thank you")
}