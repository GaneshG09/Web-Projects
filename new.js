// Handling "Hire Me" Button Click
document.getElementById("hireMeButton").addEventListener("click", function() {
    alert("Thank you for your interest! Please contact me through the form below.");
});

// Contact Form Submission (for demo purposes, just shows an alert)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
});
