  // WhatsApp Button Functionality
    document.getElementById("whatsappButton").addEventListener("click", function () {
      const phoneNumber = "9763767457"; // Change to your WhatsApp number
      const message = "Hello! I would like to know more.";
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    });