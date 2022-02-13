var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var numbers = "0123456789";
var specialCharacter = "!@#$%^&*()";
var confirmedChars ="";
   
 function generatePassword (){

  var passwordLength = window.prompt('Enter the length of the password that is between 7 and 129');
  // Conditional Recursive Function Call 
  if( (passwordLength === "" || passwordLength === null) || (passwordLength < 8 || passwordLength > 128 )) {
     window.alert("You need to provide a valid answer! Please try again.");
     return generatePassword();
  }

  var confirmedChars = lowerCase + upperCase + numbers + specialCharacter;
  //var confirmedChars ="";

   var password = "";
   for (var i=0; i< passwordLength; i++){
     randomNumber = Math.floor(Math.random() * confirmedChars.length);
     password += confirmedChars.substring(randomNumber, randomNumber + 1);
    }
    //retrun a variable to var password = generatePassword();
    return password;
  };
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
