
      function sendEmail() {
        Email.send({
          Host: "smtp.gmail.com",
          Username: "teslimbakare@gmail.com",
          Password: "@Daketima1",
          To: "abdulazeezojo24@gmail.com",
          From: "teslimbakare@live.com",
          Subject: "Sending Email using javascript",
          Body: "Well that was easy!!",
        })
          .then(function (message) {
            alert("mail sent successfully")
          });
      }
      
