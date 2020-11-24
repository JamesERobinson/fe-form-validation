const userNameError = document.getElementById('signup-username-error');
const nameError = document.getElementById('name-error')

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
    console.log(isValid)
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
    const inputs = [...document.getElementsByClassName('')];
    let isValid = inputs.every((input) => input.classList.contains('valid'))
    if (!isValid) {
        event.preventDefault();
    }
}
function validateBod(event) {
    const BodInput = event.target.value
    //let today = Date.now();
    let today = new Date(Date.now());
    console.log(today)
    let birth = new Date(BodInput);
    console.log(birth)
    //console.log(Date.parse(BodInput));
    let age = (today - birth);
    console.log(age);
}