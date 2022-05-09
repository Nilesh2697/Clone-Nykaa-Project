import navbar from "./component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("form").addEventListener("submit",signupfn);

var userdata=JSON.parse(localStorage.getItem("usercreds"))||[];

function signupfn(){

    event.preventDefault();
    

var userobj={

username:document.querySelector("#username").value,
phonenum:document.querySelector("#phone").value,
emailid:document.querySelector("#email").value,
password:document.querySelector("#password").value,
}



userdata.push(userobj);

localStorage.setItem("usercreds",JSON.stringify(userdata));
window.location.href="login.html"



}