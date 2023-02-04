const nameIn = document.getElementById('name')
const nameError = document.querySelector('.name-error')

nameIn.addEventListener('keyup',checkName)
function checkName(){
    if(document.querySelector('#name').value.length <= 2){
        nameIn.classList.add("red")
        nameIn.classList.remove('green')
        nameError.innerHTML = 'Minimum 3 charactors are Required'
        return false
    }
    if(document.querySelector('#name').value.length > 20){
        nameError.innerHTML = 'Max 20 charactors are Allowed'
        nameIn.classList.add("red")
        nameIn.classList.remove('green')
        return false
    }
    if(!nameIn.value.match(/^[a-zA-Z]{3,}(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    )){
        nameError.innerHTML = 'Invalid Name'
        nameIn.classList.add("red")
        nameIn.classList.remove('green')
        return false
    }
    nameIn.classList.remove('red')
    nameIn.classList.add('green')
    nameError.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    return true
}

const email = document.getElementById('email')
const emailError = document.querySelector('.email-error')

email.addEventListener('keyup',checkEmail)
function checkEmail(){
    if(email.value.length <= 5){
        email.classList.add("red")
        email.classList.remove('green')
        email.innerHTML = 'Enter Email'
        return false
    }
    if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    )){
        emailError.innerHTML = 'invalid email address'
        email.classList.remove('green')
        email.classList.add("red")
        return false
    }
    email.classList.remove('red')
    email.classList.add('green')
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
        password.classList.add('red')
        password.classList.remove('green')
        passwordError.innerHTML = 'Minimum 8 characters required';
        return false;
    }

    if (password.value.length > 30) {
        password.classList.add('red')
        password.classList.remove('green')
        passwordError.innerHTML = 'Maximum 30 characters allowed';
        return false;
    }

    if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        password.classList.add('red')
        password.classList.remove('green')
        passwordError.innerHTML = '<i class="fa-solid fa-circle-info"></i> ' + 'Enter A Strong Password';
        passwordError.addEventListener('click', function() {
            if (!alertShown) {
                alert(" requires a password to have at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character");
                alertShown = true;
            }
        });
        return false;
    }

    password.classList.add('green')
    password.classList.remove('red')
    passwordError.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
    return true;
}


const cpassword = document.getElementById('c-password')
const cpasswordError = document.querySelector('.confirm-password-error')

cpassword.addEventListener('keyup',checkcPassword)
function checkcPassword(){
    if(password.value == ""){
        cpassword.classList.add('red')
        cpassword.classList.remove('green')
        cpasswordError.innerHTML = 'Enter Password above'
        return false
    }
    if(password.value != cpassword.value){
        cpassword.classList.add('red')
        cpassword.classList.remove('green')
        cpasswordError.innerHTML = 'Password not Matching'
        return false
    }
    cpassword.classList.add('green')
    cpassword.classList.remove('red')
    cpasswordError.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    return true
}

const select = document.querySelector('#country')
select.addEventListener('blur',checkCountry)

function checkCountry(){
    if(select.value === 'select country'){
        select.classList.add('red')
        select.classList.remove('green')
        return false
    }
    select.classList.add('green')
    select.classList.remove('red')
    return true
}

const zip = document.querySelector('#zip')
const zipError = document.querySelector('.zip-error')

zip.addEventListener('keyup',checkzip)
function checkzip(){
    if(zip.value.length < 5 || zip.value.length > 6 || !zip.value.match(/^\d+$/
    )){
        zip.classList.add('red')
        zip.classList.remove('green')
        zipError.innerHTML = 'Enter valid code'
        return false
    }
    zip.classList.add('green')
    zip.classList.remove('red')
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
    // event.preventDefault()
    // const main =  document.querySelector('main')
    // const successScreen = document.createElement('div')
    // successScreen.classList.add('success')
    // main.appendChild(successScreen)

    alert("Form Submitted Successfully")
    return true

}
