// Assignment code here

// generate password = randomized characters for selected length
// randomized characters
// var character = {
//   letters: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,
//   numbers: 0123456789,
//   length: window.prompt("How long is your password?")
// }

function generatePassword() {
  var passwordLength = window.prompt ("How long is your password? Please pick a number between 8 and 128");

  if (passwordLength >= 8  && passwordLength <= 128) {

  } else {
  window.alert ("Your password must be between 8 and 128 characters long. Please pick another number.");
  generatePassword();
  }

  console.log(passwordLength);
}

  





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
