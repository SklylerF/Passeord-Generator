// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var passwordText = document.querySelector("#password");
  var password = generatePassword();

 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = upperCase.toLowerCase();
  const num = '0123456789';
  const spcl = '!@#$%^&*()-_+';
  let cart = '';
  let newPass = '';


  const passwordLength = parseInt(prompt('How many characters would you like? (8-128)'));

  if (isNaN(passwordLength)) {
    alert('Please add a number for password langth');
  }

  if (passwordLength >= 8 && passwordLength <= 128) {
    let addUpperCase = confirm("Do you want upper case characters?");
    let addlowerCase = confirm('Do you want lower case letters?');
    let addNumbers = confirm('Do you want numbers?');
    let addSpecial = confirm('Do you want special characters?');


    if (addUpperCase) {
      cart += upperCase
    }
    if (addlowerCase) {
      cart += lowerCase
    }
    if (addNumbers) {
      cart += num
    }
    if (addSpecial) {
      cart += spcl
    }

    if (!addNumbers && !addSpecial && !addlowerCase && !addUpperCase) {
      alert('no characteristics selected.')
    }

    for (i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * cart.length);
      newPass += cart.charAt(randomNumber);
    }
    return newPass
  }

  else {
    return 'try another value...';
  }

}
