const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  // Get values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  if(!usernameValue) {
    //Show error    
    //Add error class
    setErrorFor(username, 'Escriba un nombre de Usuario ');
  } else {
    //Add succes class
    setSuccessFor(username);
  }
  
  if(!emailValue) {
    //Show error    
    //Add error class
    setErrorFor(email, 'Escriba un correo electronico');
  } else if(!isEmail(emailValue)) {
    //Show error    
    //Add error class
    setErrorFor(email, 'El correo no es valido');
  } else {
    //Add succes class
    setSuccessFor(email);
  }
  
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if(!passwordValue) {
    //Show error    
    //Add error class
    setErrorFor(password, 'Escriba una contraseña');
  } else if(passwordValue.length < 8){
    //Add succes class
    setErrorFor(password, 'Su contraseña debe contener al menos 8 caracteres');
  } else if(!passwordValue.match(re)){
    //Add succes class
    setErrorFor(password, 'Debe contener 1 Mayuscula, minisculas y un numero.');
  } else {
    //Add succes class
    setSuccessFor(password);
  }
  
  if(!password2Value) {
    //Show error    
    //Add error class
    setErrorFor(password2, 'Escriba de nuevo su contraseña');
  } else if(passwordValue !== password2Value){
    //Add succes class
    setErrorFor(password2, 'Sus contraseñas no coinciden');
  } else {
    //Add succes class
    setSuccessFor(password2);
  }
  
  //HomeWork mostrar un mensaje de exito al hacer click y todo este correcto
}

const setErrorFor = (input, message) => {
  const formControl = input.parentElement; //this is the .form-control
  const small = formControl.querySelector('small');
  
  //add error message inside small
  small.innerText = message;
  
  //add error class
  formControl.className = 'form-control error';
} 

const setSuccessFor = (input) => {
  const formControl = input.parentElement; //this is the .form-control
  
  //add success class
  formControl.className = 'form-control success';
}

const isEmail = (email) => {  
  //this checks if the email is valid
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


