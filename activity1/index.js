//Your code goes here

// 1. Click the button to display your name
//Selectors
let btnName = document.querySelector("#btnName");
let myName = document.querySelector("#myName");
//Function
const displayName = () => {
  let msg = "Kim";
  myName.value = msg;
}
//Call the event
btnName.addEventListener('click', displayName);


// ---- 2. Switch lights on mouseover
//Selectors
let imageOff = document.querySelector("#imageOff")
//Function
const mouseOver = ()=> {
  imageOff.src = "images/lighton.png";
  mouseOff = () => {
    imageOff.src = "images/lightoff.png";
  }
  imageOff.addEventListener('mouseleave', mouseOff);
}
//Call the event
imageOff.addEventListener('mouseover', mouseOver)

//3. ---- Double click to display content
//Selectors
let btndbName = document.querySelector("#btndbName")
let paraText = document.querySelector("#displayPara");
/*Function {
  //some code here
  //create a new img element
}*/
const displayImage = () => {
let image = document.createElement("img");
image.src = "images/smileyface.png";
image.style.display = "block";
paraText.innerHTML = "You double clicked me";
paraText.style.color = "red";

document.querySelector("#displayPara").appendChild(image);
}
//Call the event
btndbName.addEventListener("dblclick", displayImage);

// ---- 4. Traffic Lights
//Selectors
let stop = document.querySelector("#btnStop");
let ready = document.querySelector("#btnReady");
let go = document.querySelector("#btnGo");
let stopLight = document.querySelector("#stopDiv");
let readyLight = document.querySelector("#readyDiv");
let goLight = document.querySelector("#goDiv");

//Function 1
const stopButton = () => {
  stopLight.style.backgroundColor = "red";
  readyLight.style.backgroundColor = "black"
  goLight.style.backgroundColor = "black"
}

//Function 2
const readyButton = () => {
  stopLight.style.backgroundColor = "black";
  readyLight.style.backgroundColor = "orange";
  goLight.style.backgroundColor = "black";
}
//Function 3
const goButton = () => {
  stopLight.style.backgroundColor = "black";
  readyLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "green";
}

//Call the events
stop.addEventListener("click", stopButton);
ready.addEventListener("click", readyButton);
go.addEventListener("click", goButton);

// ---- 5. Change textbox border colours
//Selectors
let bnt2Name = document.querySelector("#btn2Name");
let firstBox = document.querySelector("#firstName");
let secondBox = document.querySelector("#lastName");
//Function
let clickForColor = () => {
  firstBox.style.borderColor = "red";
  secondBox.style.borderColor = "green";
}
//Call the event
btn2Name.addEventListener("click", clickForColor)

// ----- 6. validate the box [length should be more than 5 characters]
//Selectors
let btnSub2 = document.querySelector("#btnSub2");
let errMsg = document.querySelector("#errMsg");
let myName2 = document.querySelector("#myName2");


//Function 
let checkCharacters = () => { 
  //if statement
  if (myName2.value.length < 5 && myName2.value == "") {
    errMsg.innerHTML = "Length should be more than 5 characters"
    console.log(errMsg);
  }else {
    errMsg.innerHTML = "All good";
  }
}


//Call the event
btnSub2.addEventListener("click", checkCharacters)

// ---- 7.create a list of hobbies
//Selectors
let btnHobbies = document.querySelector("#btnHobbies")
let section = document.querySelector("#hobbies")
/*Function {
  //for loop
}*/
const addToList = () => {
for (let i = 0; i <3; i++){
let answer = prompt("What are your hobbies?");
let li = document.createElement("li");
li.innerHTML = answer;
section.querySelector("ul").appendChild(li);
}
}
//Call the event
btnHobbies.addEventListener("click", addToList)
// ---- 8. Display a profile card from an object
//Object
const profile = {
  name: "Kim",
  role: "Student",
  img: "images/face.jpg",
  hobbies: "reading, puzzles"
};
//Selectors
let btnProfile = document.querySelector("#btnProfile");

/*Function {
    //for loop
      //if statement
  }*/

  function displayProfile() {
    for (let property in profile) {
      if (profile.hasOwnProperty(property)) {
        // Do things here
        document.querySelector(
          "#displayCard"
        ).innerHTML = `<div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${profile.img}" alt="Card image cap">
                      <div class="card-body">
                          <h3 class="card-title">${profile.name}</h3>
                          <p class="card-text">${profile.role}</p>
                          <p class="card-text">${profile.hobbies}</p>
                      </div>
                      </div>`;
      }
    }
  }

btnProfile.addEventListener("click", displayProfile);

