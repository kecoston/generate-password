// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button

generateBtn.addEventListener("click", function(event) {


// Ive added the split on the variable to break up the array. 
var lowerOp = "abcdefghijklmnopqrstuvwxyz".split("")
var upperOp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numOp = "1234567890".split("")
var specialCharOp = "!@#%^&*?".split("")

// This Array will be the elements selected to pull in to complete the password
var chosenArray = []

// These are the prompts that will direct the user to select the elements for the password
var lengthPass = prompt("How many characters would you like your password to be? Length can be between 8- 128 characters");

if (lengthPass < 8 ){
    var lengthPass = prompt("Please pick a length between 8- 128 characters");
 
}
else if (lengthPass > 128){
    var lengthPass = prompt("Please pick a length between 8- 128 characters");
}

var lowerLetters = confirm("Would you like to use lowercase letters?");
var upperLetters = confirm("Would you like to use uppercase letters?");
var num = confirm("Would you like to use numbers?");
var special = confirm("Would you like to use special characters?");

// This converts the users input to numbers
lengthPass = parseInt(lengthPass)

// This function is a loop that pulls the users input and creates the chosenArray
function addToArray(confirm, arr){
    if (confirm) {
        for (let i = 8; i<arr.length; i++){
            chosenArray.push(arr[i])
        }

    }

}

//Calls the function for chosenArray
addToArray(lowerLetters, lowerOp)
addToArray(upperLetters, upperOp)
addToArray(num, numOp)
addToArray(special, specialCharOp)

// This function is a loop that pulls the number of characters requested from the user and creates a random pull of characters
// from the chosenArray to generate the password. 
function generatePassword(){
    var password =""
    for (var i = 0; i<lengthPass; i++){
        var randomIndex = Math.floor(Math.random() * chosenArray.length)
        var randomElement = chosenArray[randomIndex]
    password += randomElement
    console.log(randomIndex)
    }
    console.log(password)
    return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword()

writePassword()

});