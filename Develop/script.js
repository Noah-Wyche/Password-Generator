// Assignment code here
// changed from var to const for clarity and readability
// Function to generate a random password based off of submitted critirea
function generatePassword() {
    const length = parseInt(promt("enter password length:"),10);

    if(isNaN(length) || length <= 0) {
        alert("Please enter a valid password length");
        return "";
    }

    // These are the critirea options shown to select for a new password
    const lowercaseChars = "abcdefghjklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numericChars = "0123456789"
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?"
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);