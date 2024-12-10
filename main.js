let form = document.getElementById('form');
let text = document.getElementById('text');
let textError = document.getElementById('textError');
let email = document.getElementById('email');
let emailError = document.getElementById('emailError');
let password = document.getElementById('password');
let passwordError = document.getElementById('passwordError');

form.addEventListener('submit',function(event){
     let error = false ;

     textError.innerHTML = "" ;
     emailError.innerHTML = "" ;
     passwordError.innerHTML = "" ;

     if(text.value.trim() === ''){
         error = true ;
         textError . innerHTML = "you must enter the name"
     }
     else if(text.value.trim() . length < 3){
         error = true ;
         textError . innerHTML = "you must enter the correct name"
     }
     if(email.value.trim() === ''){
         error = true ;
         emailError . innerHTML = "you must enter the email"
     }
    else if (!email.value.includes('@') || email.value.trim().length < 5) {
         error = true ;
         emailError . innerHTML = "please enter the correct email"
     }
     if(password.value.trim() === ''){
         error = true ;
         passwordError . innerHTML = "you must enter the password"
     }
     else if(password . value . trim() .length < 8){
         error = true ;
         passwordError. innerHTML = "you must enter the 8 characters in the password"
     }
     if(error){
        event.preventDefault();
     }
  }
)