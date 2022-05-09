import navbar from "./component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";


fetch(url).then(function (res) {
    return res.json();
})
    .then(function (res) {
        append(res);
        console.log(res);
    })

function append(data) {

    data.forEach(function (el) {

        let div = document.createElement("div");
        div.setAttribute("id","prod-img")
        div.style.backgroundColor = "white";

        div.addEventListener("click", function showDetail(){
            let detailApi = el.product_api_url;
            // console.log(detailApi)
            localStorage.setItem("detailsData", JSON.stringify(detailApi));
            window.location.href = "productDetails.html"
        })

        let brand = document.createElement("p");
        brand.innerText = el.brand;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        let convertinr = Math.floor((Number(el.price)) * 75);
        price.innerText = `MRP:${convertinr}`


        let image = document.createElement("img");
        image.src = el.image_link;

        div.append(image, name, brand, price);

        document.getElementById("container2").append(div);
    })
}

