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
    var passwordLength = prompt("Enter desired password length (8-128 characters):")
    var passwordLength = parseInt(passwordLength, 10);

    if (passwordLength <= 128 && passwordLength >= 8) {
        var typeConfirm = confirm("please pick one of the following types")
        if( typeConfirm === false) {
            var areYouSure = confirm('Do you want a password?');
            
            }
        if (areYouSure === true) {
            generatePassword();
        }

    }
    else{
        var confirmError = confirm("you must pick a number between 8-128");
        if (confirmError === true) {
            generatePassword();
        }
        else {
            alert("no password for you")
        }
    }

    if(typeConfirm ===true) {
        var lowCase = confirm("Hit ok for lower case letters");
        var upCase = confirm("Hit ok for upper case letters");
        var num = confirm("Hit ok for numbers");
        var specialChar = confirm("Hit ok for special characters"); 

        if ((lowCase === true) || 
        (upCase === true) || 
        (num === true) || 
        (specialChar === true) ) {
            if (lowCase===true){
                var lC = 'a b c d e f g h i j k l o m n o p q r s w x y z';
                var lCArray = lC.split(' ');
                var passwordArray = passwordArray.concat(lCArray);
            }
            if (upCase === true) {
                var uC = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
                var uCArray = uC.split(" ");
                var passwordArray = passwordArray.concat(uCArray);
            }
            if (num === true) {
                var num = '0 1 2 3 4 5 6 7 8 9';
                var numArray = num.split(' ');
                var passwordArray = passwordArray.concat(numArray);
            }
            if (specialChar === true) {
                var specialChar =  "! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~";
                var specialCharArray = specialChar.split(" ");
                var passwordArray = passwordArray.concat(specialCharArray);
            } 
        }
        else {
            confirmType=confirm("you must pick one type");
            if(confirmType === true)
            {
                generatePassword();
            }
            else {
                alert('no password for you :(');
            }
            
        }
    }   
    //creates newPassword, appending newPassword string by iterating the amount of passwordLength
    //passwordArray[random] indexes a character from the passwordArray appending that character to newPassword
    password = ''
    for (i=0; i < passwordLength; i++){ 
        password += passwordArray[Math.floor(Math.random()*passwordArray.length)];  
    }
    return password;
    
        // var passwordText = document.querySelector("#password");
        // return passwordText.value = newPassword;

}


