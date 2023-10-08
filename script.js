// JavaScript code for interactivity

// Example: Adding a smooth scroll effect to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust the offset as needed
            behavior: 'smooth'
        });
    });
});

// Example: Form validation for the contact form
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Simple validation, you can add more validation as needed
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // You can add code here to submit the form data to a server or perform other actions
    // For example, you can use the Fetch API to send the form data to a server.
});