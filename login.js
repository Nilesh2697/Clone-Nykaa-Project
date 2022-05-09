document.querySelector("#form").addEventListener("submit",loginfn);

var regdusers=JSON.parse(localStorage.getItem("usercreds"));

function loginfn(){

event.preventDefault();

var enteredemail=document.querySelector("#email").value;
var enteredpassword=document.querySelector("#password").value;

for(var i=0;i<regdusers.length;i++){

if(regdusers[i].emailid==enteredemail&&regdusers[i].password==enteredpassword){
alert("Login Successfull");
window.location.href="brands.html";
break;

}
else{
    alert("Login Failed Invalid Credentials")
}

}




}