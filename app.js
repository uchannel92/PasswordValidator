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

    usernameValidation()
    passwordValidation()
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
    credentials.password.includes("@") &&
    credentials.password.indexOf(' ') === -1
    ) {
        console.log('Password is valid')

    } else {
        console.log(`Password needs to be a minnimum of 8 characters. Password needs to include the @ key. Password cannot includes any spaces.`)
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
    let meassage = document.createElement('span')
    meassage.innerHTML = `<br>${credentials.password}`
    document.body.append(meassage)
}

// link it to password - if message valid it's green?
// if not valid it's red?