// Assignment code here

// generate password = randomized characters for selected length
// randomized characters
var character = {
  letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  length: window.prompt("How long is your password? Please pick a number between 8 and 128")
}

console.log(character);

function generatePassword() {
  character.length;

  if (character.length >= 8  && character.length <= 128) {
    console.log(character.length);

  } else {
  window.alert ("Your password must be between 8 and 128 characters long. Please pick another number.");
  generatePassword();
  }

  
}

  



// character.letters = Math.floor(Math.random())


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
