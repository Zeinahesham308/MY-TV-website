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

  
    function changeTextColor() {
        const signInHeading = document.querySelector('.signin-box h2');
        signInHeading.style.color = 'White';
    }

  
    function displayAlert() {
        alert('You are making the best decision now by loginin in !');
    }


    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }


    function clearFormFields() {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }

   
    changeTextColor();
    displayAlert();
    toggleDarkMode();
    clearFormFields();
});
