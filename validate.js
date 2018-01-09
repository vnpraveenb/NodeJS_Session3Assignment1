// This method checks if the email is and empty string and returns true or false accordingly
var validateEmail = function()
{
    var inputEmail = document.forms["emailValidation"]["email"].value; //storing the value of email of the form emailValidation
    if(inputEmail=="") //if statement to check if the Email is an empty string
    {
        alert("Please input the email"); // prompts the user if the email input is an empty string
        console.log("false"); // prints false to the console to show that the input failed the validation
    }
    else
    {  
        console.log("true"); // prints true to the console to show that the input succeeded the validation
    }
}