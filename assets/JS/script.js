// Assignment code here

// uppercase array
var uppercase = {
  characters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  length: 26,
}
// lowercase array
var lowercase = {
  characters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  length: 26,
}
// number array
var number = {
  characters: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  length: 10,
}
// special character array
var special = {
  characters: ["!", "@", "#", "$", "%", "^", "&", "*", "_", ";", "'", ":", "|", ",", ".", "<", ">", "?", "+", "-"],
  length: 20
}

var option = {
  one: [...uppercase.characters, ...lowercase.characters, ...number.characters, ...special.characters],
  two: [...uppercase.characters, ...lowercase.characters, ...number.characters],
  three: [...uppercase.characters, ...lowercase.characters, ...special.characters],
  four: [...uppercase.characters, ...lowercase.characters],
  five: [...uppercase.characters, ...number.characters, ...special.characters],
  six: [...uppercase.characters, ...number.characters],
  seven: [...uppercase.characters, ...special.characters],
  eight: [...uppercase.characters],
  nine: [...lowercase.characters, ...number.characters, ...special.characters],
  ten: [...lowercase.characters, ...number.characters],
  eleven: [...lowercase.characters, ...special.characters],
  twelve: [...lowercase.characters],
  thirteen: [...number.characters, ...special.characters],
  fourteen: [...number.characters],
  fifteen: [...special.characters],
}


var finalPassword = "";

function generatePassword() {
// Ask for passwordLength
 var passwordLength = window.prompt("How long is your password? Please pick a number between 8 and 128");
  // if passwordLength is between 8 and 128
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
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
            console.log("special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.one.length);
                option.one[value]
                finalPassword += option.one[value];
              } 
             randomPassword();
            }
          // if users refuses special characters
          } else {
            console.log("no special characters")
            for (var i = 0; i < passwordLength; i++) {
            var randomPassword = function() {
                 var value = Math.floor(Math.random() * option.two.length);
              option.two[value]
              finalPassword += option.two[value];
            } 
           randomPassword();
            }
          }
        // if user refuses numbers
        } else {
          console.log("no numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if user confirms special characters
          if (confirmSpecials) {
            console.log("special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.three.length);
                option.three[value]
                finalPassword += option.three[value];
              } 
             randomPassword();
            }
          // if users refuses special characters
          } else {
            console.log("no special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.four.length);
                option.four[value]
                finalPassword += option.four[value];
              } 
             randomPassword();
            }
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
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.five.length);
                option.five[value]
                finalPassword += option.five[value];
              } 
             randomPassword();
            }
          // if refuses special characters
          } else {
            console.log("no special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.six.length);
                option.six[value]
                finalPassword += option.six[value];
              } 
             randomPassword();
            }
          }

        // if user refuses numbers
        } else {
          console.log("no numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if confirm special characters
          if (confirmSpecials) {
            console.log("special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.seven.length);
                option.seven[value]
                finalPassword += option.seven[value];
              } 
             randomPassword();
            }
          // if user refuses special characters
          } else {
            console.log("no special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.eight.length);
                option.eight[value]
                finalPassword += option.eight[value];
              } 
             randomPassword();
            }
          }
        }
      }

    // if users refuses uppercase letters
    } else {
      var confirmLowerCase = window.confirm("Would you like to use lowercase letters in your password?")
      // if user confirms lowercase letters
      if (confirmLowerCase) {
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
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.nine.length);
                option.nine[value]
                finalPassword += option.nine[value];
              } 
             randomPassword();
            }
          // if user refuses special characters
          } else {
            console.log("no special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.ten.length);
                option.ten[value]
                finalPassword += option.ten[value];
              } 
             randomPassword();
            }
          }

        // If user refuses numbers 
        } else {
          console.log("no numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if confirm special characters
          if (confirmSpecials) {
            console.log("special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.eleven.length);
                option.eleven[value]
                finalPassword += option.eleven[value];
              } 
             randomPassword();
            }
          // if user refuses special characters
          } else {
            console.log("no special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.twelve.length);
                option.twelve[value]
                finalPassword += option.twelve[value];
              } 
             randomPassword();
            }
          }
        }
      // if user refuses lowercase letters
      } else {
        var confirmNumbers = window.confirm("Would you like numbers in your password?")
        // if confirm numbers
        if (confirmNumbers) {
          console.log("numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if user confirms special characters
          if (confirmSpecials) {
            console.log("special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.thirteen.length);
                option.thirteen[value]
                finalPassword += option.thirteen[value];
              } 
             randomPassword();
            }
          // if user refuses special characters
          } else {
            console.log("no special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                  var value = Math.floor(Math.random() * option.fourteen.length);
                option.fourteen[value]
                finalPassword += option.fourteen[value];
              } 
            randomPassword();
            }
          }
        } else {
          // if user refuses numbers
          console.log("no numbers")
          // Ask for special characters
          var confirmSpecials = window.confirm("Would you like your password to contain special characters?")
          // if confirm special characters
          if (confirmSpecials) {
            console.log("special characters")
            for (var i = 0; i < passwordLength; i++) {
              var randomPassword = function() {
                   var value = Math.floor(Math.random() * option.fifteen.length);
                option.fifteen[value]
                finalPassword += option.fifteen[value];
              } 
             randomPassword();
            }
          }
        }
      }
    }

  // if passwordLength is not between 8 and 128
  } else if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    
    window.alert ("Your password must be between 8 and 128 characters long. Please pick another number.");
    return generatePassword();
 
  } else {

 }

    return finalPassword;
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
