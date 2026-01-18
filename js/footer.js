 document.getElementById('composeBtn').addEventListener('click', function () {
      const recipient = "ritikmahakalkar@gmail.com"; // Predefined email
      const subject = "suggestions || Comment "; // Predefined subject
      const body = document.getElementById('message').value.trim();

      if (!body) {
        alert("Please enter a message before composing.");
        return;
      }

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    });
