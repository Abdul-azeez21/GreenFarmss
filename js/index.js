//index.js
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "<sender's email address>",
        Password: "<email password",
        To: "<abdulazeezojo24@gmail.com>",
        From: "<sender's email address>",
        Subject: "<email subject>",
        Body: "<email body>",
    }).then(
        message=>alert("mail sent successsfully")
    );
}