// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Global
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbolArr = ['!','@', '#', '$', '%', '^', '&', '*', '(', ')'];
let generatedPassword = [];
let randomFunc = [];

// Generate lowercase letter
function getRandomLower () {
  return randomLower = alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Generate uppercase letter
function getRandomUpper () {
  return randomUpper = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
}

// Generate random number between 0-9.
function getRandomNumber () {
  return randomNumber = Math.floor(Math.random() * 10);
}

// Generate special character
function getRandomSymbol () {
  return randomSymbol = symbolArr[Math.floor(Math.random() * symbolArr.length)];
} 

// Write password to the #password input
function writePassword() {

  // Clear any existing password & character generating functions
  generatedPassword.length = 0;
  randomFunc.length = 0;

  // Prompt for password criteria
  let passwordLength = prompt('Enter your password length. Must be between 8 & 128 characters.');
  let passwordLowercase = prompt('Would you like to include lowercase letters? yes or no').toLocaleLowerCase();
  let passwordUppercase = prompt('Would you like to include uppercase letters? yes or no').toLocaleLowerCase();
  let passwordNumbers = prompt('Would you like to include numbers? yes or no').toLocaleLowerCase();
  let passwordSymbols = prompt('Would you like to include special characters? yes or no').toLocaleLowerCase();

    // Checks if user input is a number between 8 and 128
    if (passwordLength >= 8 && passwordLength <= 128 && passwordLength !== NaN) {

      // Based on user criteria, pushes function into randomFunc Array
      if (passwordLowercase === 'yes') {
        randomFunc.push(getRandomLower);
        passwordLowercase = false;
      } 
      
      if (passwordUppercase === 'yes') {
        randomFunc.push(getRandomUpper);
        passwordUppercase = false;
      } 
      
      if (passwordNumbers === 'yes') {
        randomFunc.push(getRandomNumber);
        passwordNumbers = false;
      } 
      
      if (passwordSymbols === 'yes') {
        randomFunc.push(getRandomSymbol);
        passwordSymbols = false;
      }
      
      // Loop and push generated character to generatedPassword array.
      for (var i = 0; i < parseInt(passwordLength); i++) {
        let randomChar = randomFunc[Math.floor(Math.random() * randomFunc.length)]();
        generatedPassword.push(randomChar);
      }
        passwordText.value = generatedPassword.join('');

    } else {
      alert('Please enter a number between 8 and 128');
      writePassword();
    }
  } 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Console Logs
console.log(getRandomSymbol());
console.log(getRandomNumber());
console.log(getRandomLower());
console.log(getRandomUpper());