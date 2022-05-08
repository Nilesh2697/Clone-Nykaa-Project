// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // console.log("inside")    
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function postFunction(){
  // console.log("inside")
  let input = document.getElementById("postQues").value;
  // console.log(input);
  let box = document.createElement("div");
  box.setAttribute("id","answerBox")

  let question = document.createElement("h4");
  question.innerText = `Q: ${input}`;

  let displayAns = document.createElement("div");
  displayAns.setAttribute("id","displayAns")




  // answer button starts
  let ansBtn = document.createElement("button");
  ansBtn.innerText = "Answer this now"
  ansBtn.addEventListener("click",function(){
    // console.log("yes")
    let ansBox = document.createElement("div");
    ansBox.setAttribute("id",ansBox)

    let userbox = document.createElement("div")
    userbox.setAttribute("id","userbox");
    let userIcon = document.createElement("i");
    userIcon.setAttribute("class","fa-regular fa-circle-user")

    let userDetail = document.createElement("div");

    let username = document.createElement("h5");
    username.innerText = "Ravindra Yadav";

    let answerTime = document.createElement("h6");
    answerTime.innerText = "Answered - 2 Sec Ago";
    userDetail.append(username,answerTime)

    
    userbox.append(userIcon,userDetail);

    let answer = document.createElement("p");
    answer.setAttribute("id","userAnswer")
    answer.innerText = "Yes";

    ansBox.append(userbox,answer)

    document.getElementById("displayAns").append(ansBox);

  })
// answer button ends




  box.append(question,displayAns,ansBtn)
  // console.log(box)
  document.getElementById("blog-item6").append(box)

}


