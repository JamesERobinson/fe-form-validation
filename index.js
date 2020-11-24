const userNameError = document.getElementById('signup-username-error')

function validateUserName(event) {
    const userNameInput = event.target.value;

    const isValid = /\d+/.test(userNameInput)
    console.log(userNameInput.value)
    console.log(isValid)
    if (isValid) {
        userNameError.innerText = '';
    } else {
        userNameError.innerText = "Please include a number in your username"
    }
}
//must be a mix of letters, numbers and at least one special character