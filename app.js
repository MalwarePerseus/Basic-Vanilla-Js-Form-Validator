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

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address.')
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