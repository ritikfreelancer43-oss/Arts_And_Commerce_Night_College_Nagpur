document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;
    let inquiryType = document.getElementById("inquiryType").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "9763767457"; // Replace with your WhatsApp number in international format (without +)
    
    let whatsappMessage = `Hello, my name is ${firstName} ${lastName}.
Email: ${email}
Phone: ${phone}
Location: ${location}
Inquiry Type: ${inquiryType}
Message: ${message}`;

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
});


document.getElementById("campusTourBtn").addEventListener("click", function() {
    let whatsappNumber = "9763767457"; // Replace with your WhatsApp number in international format (without +)
    
    let whatsappMessage = `Hello, I am interested in a campus tour. Do you have any available slots for a visit?`;

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
});