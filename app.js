//username
//password
//conditional if or nested if
//console.log a button to print the password
//while loop for logon attempts

// create an object with keys for username and password.
const credentials = {
    username: '',
    password: '',
}

const passwordValues = ['!', '@', '£', '$', '%', '&']

//create the user registration form.
const registerForm = document.querySelector('#register')

registerForm.addEventListener('submit', function(e){
    e.preventDefault()
    credentials.username = registerForm.elements.username.value;
    credentials.password = registerForm.elements.password.value;

    // registerForm.elements.username.value = ''
    // registerForm.elements.password.value = ''

    usernameValidation()
    passwordValidation()
    knowPasswordLength()

})

function usernameValidation() {
    if (credentials.username.length < 5) {
        console.log('username is too short.')
    } else {
        console.log('You have created the username successfully!')
    }
}

// This works but i will need to tidy this up.............
function passwordValidation() {
    if (
    credentials.password.length > 8 && 
    credentials.password.indexOf(' ') === -1 &&
    credentials.password.includes("@") ||
    credentials.password.includes("!") ||
    credentials.password.includes("$") ||
    credentials.password.includes("£") ||
    credentials.password.includes("&") ||
    credentials.password.includes("%") ||
    credentials.password.includes(0) || 
    credentials.password.includes(1) || 
    credentials.password.includes(2) || 
    credentials.password.includes(3) || 
    credentials.password.includes(4) || 
    credentials.password.includes(5) ||
    credentials.password.includes(6) ||
    credentials.password.includes(7) ||
    credentials.password.includes(8) ||
    credentials.password.includes(9)
    ) {
        console.log('Password is valid')

    } else {
        console.log(`Password needs to be a minnimum of 8 characters. Password needs to include a special character ${passwordValues.join(' or ')}. Password cannot includes any spaces.
        Password requires a number`)
    }
    
}


let errMsg = document.createElement('p')
errMsg.textContent = 'This value cannot be left empty'

registerForm.addEventListener('input', isValid)

function isValid() {
    if (registerForm.elements.password.value === '') {
        document.body.append(errMsg)
    }
    if (
        registerForm.elements.password.value.length > 0 &&
        registerForm.elements.password.value.length < 4) {
        registerForm.elements.password.classList.add('weak')
        registerForm.elements.password.classList.remove('strong')
        document.body.removeChild(errMsg)
        console.log('less than 2')
    }
    if(
        registerForm.elements.password.value.length >= 4 && 
        registerForm.elements.password.value.length < 8)
    {
        registerForm.elements.password.classList.remove('weak')
        registerForm.elements.password.classList.remove('strong')  
        registerForm.elements.password.classList.add('average')   
        console.log(`currently it is ${registerForm.elements.password.value.length}`)
    }
    if(registerForm.elements.password.value.length >= 8)
    {
        registerForm.elements.password.classList.remove('average')   
        registerForm.elements.password.classList.add('strong')
        console.log(`currently it is ${registerForm.elements.password.value.length}`)
    }
}

// if the password is less than 8 alert
// if the password does not includes special characters alert
// What i'm trying to do is add logic so that you can pass the length, but fail to add the special character
// what i'm trying to do is add logic so that if you add the special character, but fail to pass the length.
// validation for numbers
// validation for space
// validation for capital letters?

// iphone photos for button event object listener hack.

// https://www.tutorialgateway.org/javascript-nested-if/



// shows password
let PasswordBtn = document.querySelector('#v1')

PasswordBtn.addEventListener('click', logPassword)

function logPassword() {
    let message = document.createElement('span')
    message.classList.add('color')
    message.innerHTML = `<br>${credentials.password}`
    document.body.append(message)
}


// preview password
let previewBtn = document.querySelector('#v2')
let hideBtn = document.querySelector('#v3')

previewBtn.addEventListener('click', previewPassword)
hideBtn.addEventListener('click', revertPassword)

function previewPassword() {
    let inputs = document.querySelectorAll('input')
    let passwordInput = inputs[1]
    passwordInput.setAttribute('type', 'text')
}

function revertPassword() {
    let inputs = document.querySelectorAll('input')
    let passwordInput = inputs[1]
    passwordInput.setAttribute('type', 'password')
}

// Add some text that will let the user know how many characters the current password is
// input event listener and string length property?

registerForm.addEventListener('input', knowPasswordLength)

function knowPasswordLength() {

    let span = document.querySelector('span')
    let count = registerForm.elements.password.value.length;

    span.textContent = count

    if (registerForm.elements.password.value.length === 0) {
        span.textContent = ':)'
    }

}
