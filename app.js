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

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Please enter a valid Email Address!")
    };
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is Required.`);
        } else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input} must be atleast ${min}Characters Long.`)
    } else if (input.value.length > max) {
        showError(input, `${input} cannot not be more than ${max} characters Long.`)
    } else {
        showSuccess(input);
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    checkRequired([username, email, password, confpassword]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    // if (username.value === '') {
    //     showError(username, 'Username is required.');
    // } else {
    //     showSuccess(username);
    // }
    // if (email.value === '') {
    //     showError(email, 'Email is required.');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Please enter a valid email address.')
    // } else {
    //     showSuccess(email);
    // }
    // if (password.value === '') {
    //     showError(password, 'Password is required.');
    // } else {
    //     showSuccess(password);
    // }
    // if (confpassword.value === '') {
    //     showError(confpassword, 'You Need to Confirm the Password.');
    // } else {
    //     showSuccess(confpassword);
    // }
});