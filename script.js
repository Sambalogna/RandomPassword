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
                var lC = ['a b c d e f g h i j k l o m n o p q r s w x y z'];
                var lCArray = lC.split(' ')
                passwordArray.concat(lC);
            }
            if (upCase === true) {
                var uC = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
                var uCArray = uC.split(" ");
                console.log(uCArray);
                var passwordArray = passwordArray.concat(uCArray);
                console.log(passwordArray)
            }
            if (num === true) {
                var num = '0 1 2 3 4 5 6 7 8 9';
                passwordArray.concat(num);
            }
            if (specialChar === true) {
                var specialChar =  "! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~";
                var specialCharArray = specialChar.split(" ");
                var passwordArray = passwordArray.concat(specialCharArray);
                passwordArray.concat(specialChar);
            }
        }
    else {
        alert("you must pick one type")
        generatePassword();
    }
    console.log(passwordArray);
 }
