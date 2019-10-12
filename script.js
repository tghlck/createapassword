//generate random password 

function generate() {

    //password length
    let complexity = 8;
    //possible characters for the password
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //for loop to choose characters from the values
    for (var i = 0; i <= complexity; i++) { 
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    //add the password to the display
    document.getElementById("display").value = password;

}

//copy generated password to clipboard

function copyPassword() {
    
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Your randomly generated password has been copied to your clipboard!");

}