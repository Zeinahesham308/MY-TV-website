// signin.js
document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.getElementById('return-button');
    const signinForm = document.getElementById('signin-form');

    returnButton.addEventListener('click', function() {
        window.location.href = 'first.html'; // Update the URL to your desired destination
    });

    signinForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = 'main.html'; // Update the URL to your desired destination
    });
});
