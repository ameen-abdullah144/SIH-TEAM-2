// Form validation script
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Thank you for your message! We will get back to you soon.');
    }

    // Clear form after submission
    this.reset();
});
