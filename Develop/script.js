// Assignment code here
// function when user clicks "Generate Password"
var generatePassword = function(){
    // questions for password
    alert("Please choose from the following options:");

    var password = ""
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCharacters = "!'`~@#$%^&*()_+-][}{|><?;:=";
   
    var passwordLength = prompt ("Please choose a password length between 8 and 128.");
        if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose option between 8 and 128.");
        return passwordLength;
        }
    
    passLength = parseInt(passLength);

    var promptLowercase = function (){
        var hasLower = confirm("Do you want to include lowercase letters?");
        if (hasLower === true) {
        passwordContains = passwordContains + lowercase;
        }
    }

    var promptUppercase = function() {
        var hasUpper = confirm("Will your password contain uppercase letters?")
        if (hasUpper === true) {
        password = password + uppercase;
        }
    }

    var promptNumbers = function() {
        var hasNumbers = confirm("Do you want to include numbers?");
        if (hasNumbers === true) {
        password = password + numbers;
        }
    } 

    var promptSpecialChars = function() {
        var hasSpecialChars = confirm*("Do you want to include special characters?");
        if (hasSpecialChars === true) {
        password = password + specialCharacters
        }
    }

    promptLowercase();
    promptUppercase();
    promptNumbers();
    promptSpecialChars();

    var finalPassword = "";
    for (let i = 0; i < passLength; i++){
    
    var passwordOutput = Math.floor(Math.random() * password.passLength);
    
    finalPassword = finalPassword + password[passwordOutput];
    
  }
  return finalPassword;

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
