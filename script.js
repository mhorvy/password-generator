// Assignment code here
// function when user clicks "Generate Password"
var generatePassword = function(){
    // questions for password
    alert("Please choose from the following options:");
    //these are the variables the password will be comprised of
    var password = ""
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCharacters = "!'`~@#$%^&*()_+-][}{|><?;:=";
    
    //this will determine the length of the password
    var passwordLength = prompt("Please choose a password length between 8 and 128.");
        if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose option between 8 and 128.");
        return passwordLength;
        }

    //this will determine whether the password contains lowercase letters
    var promptLowercase = function (){
        var hasLower = confirm("Do you want to include lowercase letters?");
        if (hasLower === true){
        return password = password + lowercase;
        }
    }
    //this will determine whether the password contains uppercase letters
    var promptUppercase = function() {
        var hasUpper = confirm("Will your password contain uppercase letters?")
        if (hasUpper === true) {
        return password = password + uppercase;
        }
    }
   
    //this will determine whether the password contains numbers
    var promptNumbers = function() {
        var hasNumbers = confirm("Do you want to include numbers?");
        if (hasNumbers === true) {
        return password = password + numbers
        }
    } 

    //this will determine whether the password contains special characters
    var promptSpecialChars = function() {
        var hasSpecialChars = confirm("Do you want to include special characters?");
        if (hasSpecialChars === true) {
        return password = password + specialCharacters;
        }
    }
    
    //call the functions from above
    hasLower()
    hasUpper()
    hasNumbers()
    hasSpecialChars()
    //this is mostly where I'm stuck is getting the actual output of characters
    password = (promptLowercase + promptUppercase + promptNumbers + promptSpecialChars);
    password = Math.floor(Math.random());
  
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
