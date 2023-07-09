const formElement = document.querySelector('.Form');
const inputName = formElement.elements.Name;
let inputEmail = formElement.elements.Email;
let errorDiv = document.querySelector('#name-error');
let errorDivEmail = document.querySelector('#email-error');
let inputAge = formElement.elements.Age;
let errorDivAge = document.querySelector('#age-error');
let inputPassword = formElement.elements.Password;
let inputPassword1 = formElement.elements.PasswordSecond;
let errorDivPassword = document.querySelector('#password-error');
let errorDivPassword1 = document.querySelector('#password1-error');
let checkbox = document.forms.form.elements.checkbox;
let inputGender = formElement.elements.gender;
let errorDivCheckbox  = document.querySelector('#checkbox-error');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    errorsName = [];
    checkName();
    checkEmail();
    checkAge();
    checkPassword();
    checkCheckbox();
    if (errorDiv.innerHTML === '') {console.log(inputName.value)};
    if (errorDivEmail.innerHTML === '') {console.log(inputEmail.value)};
    if (errorDivAge.innerHTML === '') {console.log(inputAge.value)};
    if (errorDivPassword.innerHTML === '') {console.log(inputPassword.value)};
    if (errorDivCheckbox.innerHTML === '') {console.log(inputGender.value)};
  });

  function checkName() {
    let validity = inputName.validity;
  if (validity.tooLong) {
    errorsName.push('Значение превосходит максимально допустимое');
    inputName.style.border = "1px solid red";
  } else {
    inputName.style.border = "";
  }

  if (validity.tooShort) {
    errorsName.push('Значение меньше минимально допустимого');
    inputName.style.border = "1px solid red";
  }else {
    inputName.style.border = "";
  }

  if (validity.valueMissing) {
    errorsName.push('Необходимо заполнить поле');
    inputName.style.border = "1px solid red";
  } else {
    inputName.style.border = "";
  }
  errorDiv.innerHTML = errorsName.join('. \n');
  }

  function checkEmail() {
    
    
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (inputEmail.value.match(mailFormat)) {
      errorDivEmail.innerHTML="";
      return true;
    } else {
      errorDivEmail.innerHTML = 'Ваш адрес электронной почты введён неверно!';
      inputEmail.style.border = "1px solid red";}
  }

  function checkAge() {
    
    if(inputAge.value >= 18){
      errorDivAge.innerHTML = '';
      return true;
  }
  else{
    errorDivAge.innerHTML = 'Вы младше 18!';
    inputAge.style.border = "1px solid red";
    return false;
  }
  }

  function checkPassword() {
    
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;

  if (inputPassword.value.match(passwordFormat)) {
    errorDivPassword.innerHTML="";
    return true;
} else {
  errorDivPassword.innerHTML = 'Ваш пароль некорректен!';
  inputPassword.style.border = "1px solid red";
  }
  if(inputPassword.value == inputPassword1.value){
    errorDivPassword1.innerHTML = '';  
    return true;
    }
    else{
    errorDivPassword1.innerHTML = 'Введенные пароли не соответствуют!';
    inputPassword1.style.border = "1px solid red";}
}

function checkCheckbox(){

	let isChecked = false;
  if (checkbox.checked) {
			isChecked = true;
		}
	;

	if (!isChecked) {
		errorDivCheckbox.innerHTML = 'Проверка не пройдена!';
	} else {
		errorDivCheckbox.innerHTML = '';
	}

}