
const username = document.getElementById('username');
const submit = document.getElementById('submit');

submit.addEventListener('click', ()=>{
    usernameCon();
    passwordCon();
    emailCon();
    ageCon();
});



/* Function for checking username */
function usernameCon() {
    const usernameError = document.getElementById('username-error');

    inputLength(usernameError, username);
    inputCorectCars(usernameError, username.value);

}


/* Function for checking password */
function passwordCon() {
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    inputLength(passwordError, password);
    inputCorectCars(passwordError, password.value);
}


/* Function for checking email */
function emailCon() {
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    inputLength(emailError, email);

    /* Checking for none supported characters */
    const specialChars = "<>!#$%^&*()_+[]{}?:;|'\"\\,/~`-=";
    let checkForSpecialChars = function(string){
        for(i = 0; i < specialChars.length;i++){
          if(string.indexOf(specialChars[i]) > -1){
              return true
           }
        }   
        return false;
       }

       if(checkForSpecialChars(email.value)) {
           emailError.innerHTML = "Not supported characters are entered.";
           emailError.classList.add('not-valid');
       }
}


/* Function for checking age input */
function ageCon() {
    const age = document.getElementById('age');
    const ageError = document.getElementById('age-error');

    if (age.value < 16) {
        ageError.innerHTML = "Under age 16 can't register.";
        ageError.classList.add('not-valid');
    } else {
        ageError.innerHTML = "";
    }
}








/* Function for checking input length */
function inputLength(x, y) {
    if (y.value.length < 8) { 
        x.innerHTML = "Need to be at least 8 characters.";
        x.classList.add('not-valid');
    } else {
        x.innerHTML = "";
    }
}

/*Function for checking none supported characters */
function inputCorectCars(x, y) {
        const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
        let checkForSpecialChars = function(string){
            for(i = 0; i < specialChars.length;i++){
              if(string.indexOf(specialChars[i]) > -1){
                  return true
               }
            }   
            return false;
           }
    
           if(checkForSpecialChars(y)) {
               x.innerHTML = "Here is not supported characters.";
               x.classList.add('not-valid');
           }
}