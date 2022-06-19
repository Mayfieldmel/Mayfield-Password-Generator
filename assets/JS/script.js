// Assignment code here

// generate password = randomized characters for selected length
// character.letters = Math.floor(Math.random())


// var letter = {
//   characters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
//   length: 26,
// }

// var number = {
//   characters: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
//   length: 10,
// }

// var special = {
//   characters: ["!", "@", "#", "$", "%", "^", "&", "*", "_", ";", "'", ":", "|", ",", ".", "<", ">", "?", "+", "-"],
//   length: 20
// }

var confirmAll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "_", ";", "'", ":", "|", ",", ".", "<", ">", "?", "+", "-"];
var confirmAllLength = 56;

// for (var i = 0; i < passwordLength; i++) {
//   var randomNumber = function() {
//     var value = Math.floor(Math.random() * confirmAllLength);
//     console.log(value);
//     console.log(confirmAll[value]);
//     return value;
//   } 
//   randomNumber(); 
// }


            


var passwordLength = function() {
  window.prompt("How long is your password? Please pick a number between 8 and 128")
}

// Ask for passwordLength
passwordLength()
  // if passwordLength is between 8 and 128
  if (passwordLength >= 8  && passwordLength <= 128) {
    console.log(passwordLength)

    // Ask for uppercase letters
    var confirmUpperCase = window.confirm("Would you like to use uppercase letters in your password?")

    // if user confirms uppercase letters
    if (confirmUpperCase) {
      // Ask for lowercase letters
      var confirmLowerCase = window.confirm("Would you like to use lowercase letters in your password?")
      // if user confirms lowercase letters
      if (confirmLowerCase) {
        console.log("uppercase & lowercase")
        // Ask for numbers
        var confirmNumbers = window.confirm("Would you like numbers in your password?")
        // if user confirms numbers
        if (confirmNumbers) {
          console.log("numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if user confirms special characters
          if (confirmSpecials) {
            console.log("special characters");
                
          // if users refuses special characters
          } else {
            console.log("no special characters")
          }

        // if user refuses numbers
        } else {
          console.log("no numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if user confirms special characters
          if (confirmSpecials) {
            console.log("special characters")
          // if users refuses special characters
          } else {
            console.log("no special characters")
          }
        }

      // if user refuses lowercase letters
      } else {
        console.log("only uppercase")
        // Ask for numbers 
        var confirmNumbers = window.confirm("Would you like numbers in your password?")
        // if confirm numbers
        if (confirmNumbers) {
          console.log("numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if confirm special characters
          if (confirmSpecials) {
            console.log("special characters")
          // if refuses special characters
          } else {
            console.log("no special characters")
          }

        // if user refuses numbers
        } else {
          console.log("no numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if confirm special characters
          if (confirmSpecials) {
            console.log("special characters")
          // if user refuses special characters
          } else {
            console.log("no special characters")
          }
        }
      }

    // if users refuses uppercase letters
    } else {
      console.log("only lowercase")
      // Ask for numbers
      var confirmNumbers = window.confirm("Would you like numbers in your password?")
        // if confirm numbers
        if (confirmNumbers) {
          console.log("numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if user confirms special characters
          if (confirmSpecials) {
            console.log("special characters")
          // if user refuses special characters
          } else {
            console.log("no special characters")
          }

        // If user refuses numbers 
        } else {
          console.log("no numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if confirm special characters
          if (confirmSpecials) {
            console.log("special characters")
          // if user refuses special characters
          } else {
            console.log("no special characters")
          }
        }
    }

  // if passwordLength is not between 8 and 128
  } else {
    window.alert ("Your password must be between 8 and 128 characters long. Please pick another number.");
    passwordLength();
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
