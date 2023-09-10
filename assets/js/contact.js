(function () {
    emailjs.init('oP3vfwAWFsVO2l0Le');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_4ty70pg', 'template_y1qgz39', this)
            .then(function () {
                console.log('SUCCESS!');
                swal({
                    title: "Success",
                    text: "Your message has been sent successfully!",
                    type: "success"
                }).then(function () {
                    window.location.href = "https://spidernishanta.github.io";
                });
            }, function (error) {
                console.log('FAILED...', error);
                swal({
                    title: "Failed",
                    text: "Your message could not be sent!",
                    type: "error"
                })
            });
    });
}