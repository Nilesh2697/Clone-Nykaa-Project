async function getData(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

function appendData(data, id) {
    if (id == "makeupGridContainer" || id == "skinGridContainer") {
        let mainDiv
        if (id == "makeupGridContainer") {
            mainDiv = document.getElementById("makeupGridContainer");
        }
        if(id == "skinGridContainer"){
            mainDiv = document.getElementById("skinGridContainer");
        }
        data.forEach((el) => {
            let div = document.createElement("div");
            div.style.cursor = "pointer";
            div.addEventListener("click", function click() {
                window.location.href = el.actionLink_href;
            })

            let img = document.createElement("img");
            img.src = el.articleImage_src;
            img.style.height = "200px";
            img.style.width = "auto";


            let title = document.createElement("p");
            title.innerText = el.title;
            title.style.fontSize = "20px";

            let viewNum = document.createElement("p");
            viewNum.innerText = el.view_num;

            if (el.actionLink != "") {
                let pAction = document.createElement("p");
                pAction = el.actionLink;

                // pAction.style.color = "deeppink";
                div.append(img, pAction, title, viewNum);
            }
            else {
                div.append(img, title, viewNum);
            }


            mainDiv.append(div);
        });
    }

    if (id == "popularArtitleFlex_Container") {
        let mainDiv = document.getElementById("popularArtitleFlex_Container");
        data.forEach((el) => {
            let div = document.createElement("div");
            div.style.cursor = "pointer";
            div.style.boxShadow = "0 2px 14px 0 rgba(0, 0, 0, .1)";
            div.addEventListener("click", function click() {
                window.location.href = el.link;
            })

            let img = document.createElement("img");
            img.src = el.img;
            img.style.height = "140px";
            img.style.width = "250px";


            let title = document.createElement("p");
            title.innerText = el.title;
            title.style.textAlign = "center";
            title.style.fontSize = "16px";
            title.style.margin = "15px 20px"

            div.append(img, title);
            mainDiv.append(div);
        });
    }
}

export { getData, appendData };