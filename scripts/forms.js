//add event listener for the forms validation
const submit = document.querySelector("#submit");

function validateForm(){
//get the values
let mainpassword = document.getElementById("password").value;
let confpassword = document.getElementById("password2").value;
    if (mainpassword === confpassword) {
        document.querySelector(".error").textContent="Password Correct"
        document.querySelector("form").action="./record.html"
    } else {
        document.querySelector(".error").textContent="Passwords Do Not Match";
        confpassword.style.backGroundColor ="red"; 
        confpassword.focus();

    }
}
