import navbar from "./component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

 let added = JSON.parse(localStorage.getItem("addToBagdata")) || [];
let getDataFromURL = async () => {
    let url = JSON.parse(localStorage.getItem("detailsData"));
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)

    let imgDiv = document.getElementById("imgMainDiv");
    let img = document.createElement("img");
    img.src = data.image_link;;
    img.style.margin = "auto"
    imgDiv.append(img);

    let detailsMainDiv = document.getElementById("detailsMainDiv");

    let title = document.createElement("h1");
    title.innerText = data.name;
    title.style.fontSize = "30px";


    let star = document.createElement("div");
    for (let i = 0; i < data.rating; i++) {
        let span = document.createElement("span");
        span.setAttribute("class", "fa fa-star checked");
        star.append(span);
    }

    let price = document.createElement("p");
    price.innerText = `Rs. ${Math.floor((Number(data.price))*75)}`;
    price.style.fontSize = "25px";
    price.style.fontWeight = "bold"

    let priceDes = document.createElement("p");
    priceDes.innerText = "inclusive of all taxes";
    priceDes.style.color = "gray"

    let desc = document.createElement("p");
    desc.innerText = data.description

    let bagBtn = document.createElement("button");
    bagBtn.innerText = "ADD TO BAG"
    bagBtn.addEventListener("click",function(){
       addToBag(data)
    })
    bagBtn.style.backgroundColor = "deeppink"
    bagBtn.style.color = "white"
    bagBtn.style.width = "222px";
    bagBtn.style.height = "48px";
    bagBtn.style.border = "0px";
    bagBtn.style.fontSize = "16px";
    bagBtn.style.cursor = "pointer";

    let deliveryOptions = document.createElement("p");
    deliveryOptions.innerText = "Delivery Options";
    deliveryOptions.style.fontSize = "16px";
    deliveryOptions.style.color = "gray";

    let pincodeInputBox = document.createElement("input");
    pincodeInputBox.setAttribute("placeholder","Enter pincode");
    pincodeInputBox.style.height = "28px";

    let pincodeBtn = document.createElement("button");
    pincodeBtn.innerText = "Check"
    pincodeBtn.style.backgroundColor = "white";
    pincodeBtn.style.color = "deeppink"
    pincodeBtn.style.width = "100px";
    pincodeBtn.style.height = "32px";
    pincodeBtn.style.border = "0px";
    pincodeBtn.style.fontSize = "14px";
    pincodeBtn.style.cursor = "pointer";
    pincodeBtn.style.border = "1px solid black";

    detailsMainDiv.append(title, star, price, priceDes, desc, bagBtn, deliveryOptions, pincodeInputBox,pincodeBtn);

}

getDataFromURL();
function addToBag(data)
{
added.push(data)
    localStorage.setItem("addToBagdata",JSON.stringify(added));
}

