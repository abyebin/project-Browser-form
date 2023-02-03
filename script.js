const nameIn = document.getElementById('name')
const nameError = document.querySelector('.name-error')

nameIn.addEventListener('keyup',checkName)
function checkName(){
    if(document.querySelector('#name').value.length <= 2){
        nameError.innerHTML = 'Minimum 3 charactors are Required'
        return false
    }
    if(document.querySelector('#name').value.length > 20){
        nameError.innerHTML = 'Max 20 charactors are Allowed'
        return false
    }
    if(!nameIn.value.match(/^[a-zA-Z]{3,}(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    )){
        nameError.innerHTML = 'Invalid Name'
        return false
    }
    nameError.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    return true
}

const email = document.getElementById('email')
const emailError = document.querySelector('.email-error')

email.addEventListener('keyup',checkEmail)
function checkEmail(){
    if(email.value.length <= 5){
        emailError.innerHTML = 'Enter Email'
        return false
    }
    if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    )){
        emailError.innerHTML = 'invalid email address'
        return false
    }
    emailError.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    return true
}


const password = document.getElementById('password')
const passwordError = document.querySelector('.password-error')
const passwordDiv = document.querySelector('.password-div')

let alertShown = false;

password.addEventListener('keyup', checkPassword);

function checkPassword() {
    if (password.value.length <= 8) {
        passwordError.innerHTML = 'Minimum 8 characters required';
        return false;
    }

    if (password.value.length > 30) {
        passwordError.innerHTML = 'Maximum 30 characters allowed';
        return false;
    }

    if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passwordError.innerHTML = '<i class="fa-solid fa-circle-info"></i> ' + 'Enter A Strong Password';
        passwordError.addEventListener('click', function() {
            if (!alertShown) {
                alert(" requires a password to have at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character");
                alertShown = true;
            }
        });
        return false;
    }

    passwordError.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
    return true;
}


const cpassword = document.getElementById('c-password')
const cpasswordError = document.querySelector('.confirm-password-error')

cpassword.addEventListener('keyup',checkcPassword)
function checkcPassword(){
    if(password.value != cpassword.value){
        cpasswordError.innerHTML = 'Password not Matching'
        return false
    }
    cpasswordError.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    return true
}



const zip = document.querySelector('#zip')
const zipError = document.querySelector('.zip-error')

zip.addEventListener('keyup',checkzip)
function checkzip(){
    if(zip.value.length < 5 || zip.value.length > 6 || !zip.value.match(/^\d+$/
    )){
        zipError.innerHTML = 'Enter valid code'
        return false
    }
    zipError.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    return true
}

const sButton = document.querySelector('.Sbutton')
const submitError = document.querySelector('.submit-error')

function validate(){
    if(!checkName() || !checkEmail() || !checkPassword()
    || !checkcPassword() || !checkCountry() || !checkzip()){

        submitError.setAttribute("style","display: block");
        submitError.innerHTML = "Please fix error"

        setTimeout(function(){
            submitError.setAttribute("style","display: none");
        },3000)

        return false
    }
    return true

}
