// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolArr = ['!','@', '#', '$', '%', '^', '&', '*', '(', ')'];
var generatedPassword = [];
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

  // Prompt for password criteria
  var passwordLength = prompt('Enter your password length. Must be between 8 & 128 characters.');
  var passwordLowercase = prompt('Would you like to include lowercase letters? yes or no').toLocaleLowerCase();
  var passwordUppercase = prompt('Would you like to include uppercase letters? yes or no').toLocaleLowerCase();
  var passwordNumbers = prompt('Would you like to include numbers? yes or no').toLocaleLowerCase();
  var passwordSymbols = prompt('Would you like to include special characters? yes or no').toLocaleLowerCase();

  if (passwordLength >= 8 && passwordLength <= 128 && passwordLength) {

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
    
    for (var i = 0; i < parseInt(passwordLength); i++) {
      let randomChar = randomFunc[Math.floor(Math.random() * randomFunc.length)]();
      generatedPassword.push(randomChar);

    }
      var passwordText = document.querySelector("#password");
      passwordText.value = generatedPassword.join('');
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(getRandomSymbol());
console.log(getRandomNumber());
console.log(getRandomLower());
console.log(getRandomUpper());