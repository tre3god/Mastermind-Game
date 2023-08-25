// console.log("test");

/*----- constants -----*/
const colorCode = ["orange", "yellow", "blue", "green", "purple", "pink"];

/*----- state variables -----*/
//Secret code (changes every game/reset)
const secret = [];

/*----- cached elements  -----*/

/*----- event listeners -----*/
const generateSecret = () => {
  // Initialize counting to 0
  const colorCount = colorCode.map((col) => ({ col, count: 0 }));

  while (secret.length < 4) {
    const randomInt = Math.floor(Math.random() * 6);
    const selectedColor = colorCode[randomInt];
    // console.log(selectedColor);
    // console.log(colorCount); //--> shows the array
    // console.log(
    //   colorCount[randomInt].count && colorCount[randomInt].count >= 2
    // ); //--> access count figure in array

    if (colorCount[randomInt].count && colorCount[randomInt].count >= 2) {
      continue; // Skip adding another color if we have reached the limit
    }

    secret.push(selectedColor);
    colorCount[randomInt].count++;
  }
  console.log(secret);
  return secret;
};

/*----- functions -----*/
function changeButtonColor() {
  const pChoice = document.querySelectorAll(".playerChoice");
  const checkers = document.querySelectorAll(".checker");

  let clickedvalue = "";

  // Add a click event listener to the playerChoice
  for (let i = 0; i < pChoice.length; i++) {
    pChoice[i].addEventListener("click", function clickButton() {
      clickedvalue = pChoice[i].getAttribute("value");
      console.log(clickedvalue);
    });
  }

  //Add click event listener to answer buttons
  for (let i = 0; i < checkers.length; i++) {
    checkers[i].addEventListener("click", function changevalue() {
      checkers[i].style.backgroundColor = clickedvalue;
    });
  }
}

changeButtonColor();

//Before Game Start
// Generate secret code

//During Game
//Return value when player make a choice

//After Game

function render() {}

function init() {
  render();

  // Start button generate secret code

  const startButton1 = document.querySelector("#startButton");
  startButton1.addEventListener("click", generateSecret);
}

init();
