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
};

/*----- functions -----*/

//Before Game Start
// Generate secret code

//During Game
//Return value when player make a choice

//After Game

const render = () => {};

function init() {
  render();

  const startButton1 = document.querySelector("#startButton");
  startButton1.addEventListener("click", generateSecret);
}

init();
