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


function  generatePassword() {
    var passwordArray = []
    //numnum takes userinput for password length
    var numnum = prompt("Enter desired password length (8-128 characters):")
    confirm("please pick one of the following types")
    var lowCase = confirm();
    var upCase = confirm();
    var num = confirm();
    var specialChar = confirm(); 

    if ((lowCase === true) || 
        (upCase === true) || 
        (num === true) || 
        (specialChar === true) ) {
            if (lowCase===true){
                var lC = [];
                passwordArray.concat(lC);
            }
            if (upCase === true) {
                var uC = [];
                passwordArray.concat(uC);
            }
            if (num === true) {
                var num = [];
                passwordArray.concat(num);
            }
            //I should have just used methods 
            if (specialChar === true) {
                var specialChar = ["!","\"","#","$","%","&,","\'","()","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
                passwordArray.concat(specialChar);
            }
        }
    else {
        alert("you must pick one type")
        generatePassword();
    }
}