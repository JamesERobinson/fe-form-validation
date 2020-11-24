const userNameError = document.getElementById('signup-username-error')

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
function handleSubmit(event){
    const inputs =[...document.getElementsByClassName('')];
    let isValid = inputs.every((input)=> input.classList.contains('valid'))
    if (!isValid){
        event.preventDefault();
    }
}