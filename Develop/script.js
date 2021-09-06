// Assignment code here
// function when user clicks "Generate Password"
var generatePassword = function(){
    // questions for password
    alert("Please choose from the following options:");

    var passwordContains    = ""
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCharacters = "!'`~@#$%^&*()_+-][}{|><?;:=";
    
    var passwordLength = prompt ("Please choose a password length between 8 and 128.");
        if (passwordLength = < 8 || passwordLength > 128) {
            alert("Please choose option between 8 and 128.");
            return passwordLength;
        }
    
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
