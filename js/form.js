var nam = document.forms["form1"]["q8_fullName"];
var email = document.forms["form1"]["q7_email"];
var message = document.forms["form1"]["q4_message4"];
var eregex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]{2,20})$/;

function validate(){
if(nam.value==""){
    alert("Name cannot be empty");
    nam.focus();
    return false;
}

if(message.value==""){
    alert("Message cannot be empty");
    message.focus();
    return false;
}

if(email.value==""){
    alert("Email cannot be empty")
    email.focus();
    return false;
}
if(!eregex.test(email.value)){
    alert("Incorrect Email.");
    email.focus();
    return false;
}
    alert("Your message has been send successfully!!")
    nam = email = message ="";
}



var button = document.querySelector("#submitButton");
button.addEventListener("click",function(){
    button.classList.add("button-clicked");

    setTimeout(function(){
        button.classList.remove("button-clicked");
    },100);
});

