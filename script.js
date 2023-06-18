// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = prompt("length of password, between 8 and 128 characters");
  if (length === null) {
    // User clicked cancel in the prompt
    return;
  } else {
    if (length >= 8 && length <= 128) {
      // Length is OK
      // proceed to the other prompts
      var includeLowercase = confirm("Do you want lowercase characters?");
      var includeUppercase = confirm("Do you want uppercase characters?");
      var includeNumeric = confirm("Do you want digits?");
      var includeSpecial = confirm("Do you want special characters?");
    } else {
      // User entered nonsense
      alert("Please enter a number between 8 and 128.");
    }
  }
}