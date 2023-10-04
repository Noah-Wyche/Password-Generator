// Welcome to the JavaScript!
// Changed from var to const for clarity and readability
// Function to generate a random password based off of submitted critirea
function generatePassword() {

    // Promts the user to input the password length in a dialog box
    // Stores the users input as a base 10 integer and saves it to the constant variable 'length'
    const length = parseInt(prompt('Enter password length (Must be 8 or more characters)'), 10);

    // If statement to ensure the password is between 8 and 128
    // Will prompt the user if the chosen length does not fit within the specifications
    // This will terminate the generation attempt
    if (isNaN(length) || length < 8 || length > 128) {
        alert('Please enter a valid password length (Cannot excede 128 characters)');
        return '';
    }

    // These are the possible characters to be used in the password generation
    const lowercaseChars = 'abcdefghjklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '~!@#$%^&*()_+[]{}|;:,.<>?/';

    // This is where the user will be promted on wether or not the character options will be included in this password generation
    // Lowercase characters are included as default in the password generation so a password will always be displayed when no other options are selected
    let availableChars = lowercaseChars;  
    const includeUppercase = confirm('Include uppercase characters?');
    const includeNumbers = confirm('Include numbers?');
    const includeSpecial = confirm('Include special characters?')

    // This is determining that if the option was confirmed, than it is added to the available character options
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numericChars;
    if (includeSpecial) availableChars += specialChars;

    // This line establishes a variable called 'password' and sets its value as an empty string
    let password = '';

    // This is a for loop that will run 'length' times which is the desired length of the password
    // Inside the loop it generates a random index using Math.random to give a character that fits the available characters
    // The += operater adds the character to the end of the string effectively building the password piece by piece
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    // Here the return statement identifies password as what should be displayed
    return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Here I am adding a feature to display the generated passwords in a list under the password generator box
// The list resets when the browser is refreshed
// Array to store generated passwords
const generatedPasswords = [];

// Write password to the #password input and save it
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
  
    // Add the generated password to the array
    generatedPasswords.push(password);
  
    // Set the obtained password as the value of the #password input
    passwordText.value = password;
  
    // Display the saved passwords
    displaySavedPasswords();
  }
  
  // Function to display the saved passwords
  function displaySavedPasswords() {
    const savedPasswordsDiv = document.querySelector("#savedPasswords");
    savedPasswordsDiv.innerHTML = "";
  
    if (generatedPasswords.length === 0) {
      savedPasswordsDiv.innerHTML = "<p>No passwords saved yet.</p>";
      return;
    }
  
    const passwordList = document.createElement("ul");
    generatedPasswords.forEach((password, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Password ${index + 1}: ${password}`;
      passwordList.appendChild(listItem);
    });
  
    savedPasswordsDiv.appendChild(passwordList);
  }
