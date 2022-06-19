// Assignment code here

// generate password = randomized characters for selected length
// randomized characters
var character = {
  letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specials: ["!", "@", "#", "$", "%", "^", ")", "&", "*", "(", "_", ";", "'", ":", "|", ",", ".", "<", ">", "?", "+", "-"],
  length: window.prompt("How long is your password? Please pick a number between 8 and 128")
}

console.log(character);




  if (character.length >= 8  && character.length <= 128) {
    console.log(character.length)
    var confirmUpperCase = window.confirm("Would you like to use uppercase letters in your password?")
    if (confirmUpperCase) {
      var confirmLowerCase = window.confirm("Would you like to use lowercase letters in your password?")
      if (confirmLowerCase) {
        console.log("uppercase & lowercase")
        var confirmNumbers = window.confirm("Would you like numbers in your password?")
        if (confirmNumbers) {
          console.log("numbers")
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          if (confirmSpecials) {
            console.log("special characters")
          } else {
            console.log("no special characters")
          }
        } else {
          console.log("no numbers")
        }
      } else {
        console.log("only uppercase")
        var confirmNumbers = window.confirm("Would you like numbers in your password?")
        if (confirmNumbers) {
          console.log("numbers")
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          if (confirmSpecials) {
            console.log("special characters")
          } else {
            console.log("no special characters")
          }
        } else {
          console.log("no numbers")
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          if (confirmSpecials) {
            console.log("special characters")
          } else {
            console.log("no special characters")
          }
        }
      }
    } else {
      console.log("only lowercase")
      var confirmNumbers = window.confirm("Would you like numbers in your password?")
        if (confirmNumbers) {
          console.log("numbers")
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          if (confirmSpecials) {
            console.log("special characters")
          } else {
            console.log("no special characters")
          }
        } else {
          console.log("no numbers")
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          if (confirmSpecials) {
            console.log("special characters")
          } else {
            console.log("no special characters")
          }
        }
    }
  } else {
    window.alert ("Your password must be between 8 and 128 characters long. Please pick another number.");
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
