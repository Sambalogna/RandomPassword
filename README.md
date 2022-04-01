# RandomPassword

## Summary

This project involved using an addEventListener. Upon clicking the generate password button the user will be prompted with choices to customize their password. The password  generated will be a randomized string of characters including the chosen types of characters and the number of characters specified by the prompt input.

[RandomPasswordGeneratorWebPage](https://sambalogna.github.io/RandomPassword/)
[Screenshot](./assets/Capture.PNG)

## Key Code Snippets

Prompt() method gives the length that the password will be.
```Javascript 
 var passwordLength = prompt("Enter desired password length (8-128 characters):")
```

Randomizer function takes in the length desired with passwordLength. The password then adds a random character from the a random index of passwordArray for every iteration of the for loop.
```Javascript
    password = ''
    for (i=0; i < passwordLength; i++){ 
        password += passwordArray[Math.floor(Math.random()*passwordArray.length)];  
    }
    return password
``` 

If statement confirms the type and if the type is true it will then concatinate that string to passwordArray.
```Javascript 
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
```