// Generates Password using for loop
function gen(){
    let slide = document.getElementById("slider").value;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";
// loops through values selecting random characters creating a password and saving it to password
    for(var i = 0; i <= slide; i++){
        password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length-1)));
    }
// displays password in display id
    document.getElementById("display").value = password;
}
// Sets length automaticlly to 60
document.getElementById("length").innerHTML = "Length: 60";
// Shows length in lenght id
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 8"
    }
}
// copys password from display to clipboard and alerts you once its done 
function copy(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}