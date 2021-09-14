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
        return generatePassword;
        }

    //this will determine whether the password contains lowercase letters
    var hasLower = function (){
        let hasLower = confirm("Do you want to include lowercase letters?");
        if (hasLower === true){
        password = password + lowercase;
        }
    }
    //this will determine whether the password contains uppercase letters
    var hasUpper = function() {
        let hasUpper = confirm("Will your password contain uppercase letters?")
        if (hasUpper === true) {
        password = password + uppercase;
        }
    }
   
    //this will determine whether the password contains numbers
    var hasNumbers = function() {
        let hasNumbers = confirm("Do you want to include numbers?");
        if (hasNumbers === true) {
        password = password + numbers
        }
    } 

    //this will determine whether the password contains special characters
    var hasSpecialChars = function() {
        let hasSpecialChars = confirm("Do you want to include special characters?");
        if (hasSpecialChars === true) {
        password = password + specialCharacters;
        }
    }
    
    //call the functions from above
    hasLower()
    hasUpper()
    hasNumbers()
    hasSpecialChars()
// this should allow for the final output
    var thePassword = "";
    for (let i = 0; i < passwordLength; i++){
      
      var passwordOptions = Math.floor(Math.random() * password.length);
      thePassword = thePassword + password[passwordOptions];
      
    }
    return thePassword;
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
