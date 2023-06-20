// Assignment Code
var generateBtn = document.querySelector("#generate");

// These variables will store the user's selected options
var length;
var includeLowercase;
var includeUppercase;
var includeNumeric;
var includeSpecial;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }

}

// Assuming valid options selected by the user,
// build the random password and return it as 
// the value of this function.

function makePassword() {
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

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * requestedCharacters.length);
    newPassword = newPassword + requestedCharacters[randomIndex];
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// The generatePassword() function prompts the user for length and character types
// and then returns the generated password.
// If the user's inputs were unacceptable or cancel, then return false.

function generatePassword() {
  length = prompt("length of password, between 8 and 128 characters");
  if (length === null) {
    // User clicked cancel in the prompt
    return false;
  } else {
    if (length >= 8 && length <= 128) {
      // Length is OK
      // proceed to the other prompts
      includeLowercase = confirm("Do you want lowercase characters?");
      includeUppercase = confirm("Do you want uppercase characters?");
      includeNumeric = confirm("Do you want digits?");
      includeSpecial = confirm("Do you want special characters?");

      if (includeLowercase || includeUppercase || includeNumeric || includeSpecial) {
        // User selected at least one character type;
        // Now we are ready to generate the password.
        return makePassword();
      } else {
        // User did not select any character types
        alert("You need to select at least one character type for your password.");
        return false;
      }
    } else {
      // User entered something that was not a number
      alert("Please enter a number between 8 and 128.");
      return false;
    }
  }
}