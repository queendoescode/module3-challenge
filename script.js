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

// The generatePassword() function prompts the user for length and character types
// and then returns the generated password.
// If the user's inputs were unacceptable or cancel, then return false.

function generatePassword() {
  var length = prompt("length of password, between 8 and 128 characters");
  if (length === null) {
    // User clicked cancel in the prompt
    return false;
  } else {
    if (length >= 8 && length <= 128) {
      // Length is OK
      // proceed to the other prompts
      var includeLowercase = confirm("Do you want lowercase characters?");
      var includeUppercase = confirm("Do you want uppercase characters?");
      var includeNumeric = confirm("Do you want digits?");
      var includeSpecial = confirm("Do you want special characters?");

      if (includeLowercase || includeUppercase || includeNumeric || includeSpecial) {
        // User selected at least one character type;
        // Now we are ready to generate the password.

        var requestedCharacters = "";

        if (includeLowercase) {
          requestedCharacters = requestedCharacters + "abcdefghijklmnopqrstuvwxyz";
        }

        if (includeUppercase) {
          requestedCharacters = requestedCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (includeNumeric) {
          requestedCharacters = requestedCharacters + "0123456789";
        }

        if (includeSpecial) {
          requestedCharacters = requestedCharacters + " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }

        var newPassword = "";

        return newPassword;
      } else {
        // User did not select any character types
        alert("You need to select at least one character type for your password.");
        return false;
      }
    } else {
      // User entered nonsense
      alert("Please enter a number between 8 and 128.");
      return false;
    }
  }
}