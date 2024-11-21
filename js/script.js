document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Initialize EmailJS
    emailjs.init('NdBq3vkeTspDWvC3Q'); // Replace with your EmailJS Public Key

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_4enx1s7', 'template_djwh7jr', {
        from_name: name,
        from_email: email,
        message: message,
    }).then(
        function (response) {
            console.log('SUCCESS:', response);
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Clear the form
            
        },
        function (error) {
            console.error('ERROR:', error);
            alert('Failed to send message. Please try again.');
        }
    );
});