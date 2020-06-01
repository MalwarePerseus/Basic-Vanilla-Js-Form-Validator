const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confpassword = document.getElementById('conf-password');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-fields error failure';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-fields success';
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (username.value === '') {
        showError(username, 'Username is required.');
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'Email is required.');
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'Password is required.');
    } else {
        showSuccess(password);
    }
    if (confpassword.value === '') {
        showError(confpassword, 'You Need to Confirm the Password.');
    } else {
        showSuccess(confpassword);
    }
});