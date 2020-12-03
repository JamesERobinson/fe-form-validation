const userNameError = document.getElementById('signup-username-error');
const nameError = document.getElementById('name-error')
const bodError = document.getElementById('bod-error');

function validateUserName(event) {
    const userNameInput = event.target;

    const isValid = /\d+/.test(userNameInput.value)

    if (isValid) {
        userNameInput.classList.add('valid')
        userNameInput.classList.remove('invalid')
        userNameError.innerText = '';

    } else {
        userNameInput.classList.add('invalid')
        userNameInput.classList.remove('valid')
        userNameError.innerText = "Please include a number in your username"
    }
}
function validateName(event) {
    const nameInput = event.target;
    const isValid = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(nameInput.value);

    if (isValid) {
        nameInput.classList.add('valid')
        nameInput.classList.remove('invalid')
        nameError.innerText = '';
    }
    else {
        nameInput.classList.add('invalid')
        nameInput.classList.remove('valid')
        nameError.innerText = 'Only Valid Names Please';
    }
}
function handleSubmit(event) {
    const inputs = [...document.getElementsByClassName('signupInput')];
    let isValid = inputs.every((input) => input.classList.contains('valid'))
    if (!isValid) {
        event.preventDefault();
    }
}
function validateBod(event) {
    const { value: bodsec } = event.target
    const bodInput = event.target;
    let today = new Date(Date.now());
    let birth = new Date(bodsec);
    let age = (today - birth);
    if (age > 5.676e+11) {
        bodInput.classList.add('valid')
        bodInput.classList.remove('invalid')
        bodError.innerText = 'Over 18';
    }
    else {
        bodInput.classList.add('invalid')
        bodInput.classList.remove('valid')
        bodError.innerText = "Over 18's Only";
    }
}