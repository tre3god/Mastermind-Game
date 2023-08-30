/*----- constants -----*/
const colorCode = ["orange", "yellow", "blue", "green", "purple", "pink"];

/*----- state variables -----*/
//Secret code (changes every game/reset)
const secret = [];
const submitArray = [];
const feedbackArray = [];

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

// initialize first submit button
const firstSubmit = () => {
  const firstSub = document.getElementById("first");
  firstSub.style.display = "inline-block";
};

// function to move img
const moveImg = () => {
  const imgs = document.querySelectorAll("img[src]"); // Select all img elements with src attribute

  imgs.forEach((element) => {
    if (element.classList.contains("mastercode")) {
      element.classList.remove("mastercode");
    }
    element.classList.add("marquee");
  });
};

// reset button
function refreshPage() {
  window.location.reload();
}

/*----- functions -----*/
// for changing button color when clicked
function changeButtonColor(event) {
  const pChoice = document.querySelectorAll(".playerChoice");
  const checkers = document.querySelectorAll(".checking");

  let clickedvalue = "";

  // Add a click event listener to the playerChoice
  for (let i = 0; i < pChoice.length; i++) {
    pChoice[i].addEventListener("click", function clickButton() {
      clickedvalue = pChoice[i].getAttribute("value");
      // console.log(clickedvalue);
    });
  }

  //Add click event listener to answer buttons
  for (let i = 0; i < checkers.length; i++) {
    checkers[i].addEventListener("click", function changevalue() {
      checkers[i].style.backgroundColor = clickedvalue;
      checkers[i].value = clickedvalue;
    });
  }
}
changeButtonColor();

function nextRowButtonColor(event) {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;
  // check which row ID
  const p = parseInt(clickedRowId.replace("row", ""));
  // change to number
  const rowNumber = parseInt(clickedRowId.replace("row", ""));
  // subtract 1
  const newRowNumber = rowNumber - 1;
  console.log(newRowNumber);
  // target next row
  const buttons = document.querySelectorAll(
    "#row" + newRowNumber + " .checking"
  );

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", changeButtonColor);
  }
}

// when submit will lock answer in row and disable submit button
function removeCheckingClass(event) {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;

  //check which row ID
  const p = parseInt(clickedRowId.replace("row", ""));

  // take all row ID based on click
  const buttons = document.querySelectorAll("#" + clickedRowId + " .checking");

  // disable submit button
  const submitButton = document.querySelector("#" + clickedRowId + " .submit");
  submitButton.disabled = true;

  // remove all clicked row CHECKING class
  buttons.forEach(function (button) {
    if (button.classList.contains("checking")) {
      button.classList.remove("checking");
      button.classList.add("checked");
      // console.log(p);
    }
  });
}

function openNextSubmit(event) {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;
  console.log(clickedRowId);
  // change to a number
  const rowNumber = parseInt(clickedRowId.replace("row", ""));

  // Subtract 1
  const newRowNumber = rowNumber - 1;
  console.log(newRowNumber);
  const unsubmitted = document.querySelectorAll(
    "#row" + newRowNumber + " .unsubmitted"
  );

  unsubmitted.forEach(function (button) {
    if (button.classList.contains("unsubmitted")) {
      button.classList.remove("unsubmitted");
      button.classList.add("submit");
    }
  });
}

// when submit will lock feedback and change box size to show its locked in
function removeHintClass(event) {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;

  //check which row ID
  const p = parseInt(clickedRowId.replace("row", ""));

  // take all row ID based on click
  const buttons = document.querySelectorAll("#" + clickedRowId + " .hint");

  // remove all clicked row HINT class
  buttons.forEach(function (button) {
    if (button.classList.contains("hint")) {
      button.classList.remove("hint");
      button.classList.add("hintCleared");
      // console.log(p);
    }
  });
}

// to enable next rows's ANSWER click ability
function enableNextRow(event) {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;
  console.log(clickedRowId);
  // change to a number
  const rowNumber = parseInt(clickedRowId.replace("row", ""));

  // Subtract 1
  const newRowNumber = rowNumber - 1;
  console.log(newRowNumber);
  console.log("#row" + newRowNumber + " .unchecked");

  const buttons = document.querySelectorAll(
    "#row" + newRowNumber + " .unchecked"
  );
  console.log(buttons);
  buttons.forEach(function (button) {
    if (button.classList.contains("unchecked")) {
      button.classList.remove("unchecked");
      button.classList.add("checking");
    }
  });
}

// to enable next row's HINT click ability
function enableNextHint(event) {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;
  console.log(clickedRowId);
  // change to a number
  const rowNumber = parseInt(clickedRowId.replace("row", ""));

  // Subtract 1
  const newRowNumber = rowNumber - 1;
  console.log(newRowNumber);
  console.log("#row" + newRowNumber + " .unhinted");

  const buttons = document.querySelectorAll(
    "#row" + newRowNumber + " .unhinted"
  );
  console.log(buttons);
  buttons.forEach(function (button) {
    if (button.classList.contains("unhinted")) {
      button.classList.remove("unhinted");
      button.classList.add("hint");
    }
  });
}

// when win, disable board, show alert.
function checkWin() {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;
  // check which row ID
  const p = parseInt(clickedRowId.replace("row", ""));
  // take all HINTCLEARED based on clicked row
  const hintsCleared = document.querySelectorAll(
    "#" + clickedRowId + " .hintCleared"
  );

  let allRed = true; // Assume all buttons are red initially

  hintsCleared.forEach(function (hintCleared) {
    const computedStyle = getComputedStyle(hintCleared);
    const backgroundColor = computedStyle.backgroundColor;

    if (backgroundColor !== "rgb(255, 0, 0)") {
      allRed = false;
      return;
    }
  });

  if (allRed) {
    alert("You got the correct answer! Good Job!");
    const board = document.querySelector("#gameBoard");
    board.classList.add("gameBoardDisabled");
  }
}

// when at row1, no red feedbacks, show alert
function checkLose() {
  const clickedRowId = event.target.closest("tr").id;
  console.log("clickedrowid " + clickedRowId);

  const hintsCleared = document.querySelectorAll(
    "#" + clickedRowId + " .hintCleared"
  );
  let showAlert = true;

  hintsCleared.forEach(function (hintCleared) {
    const computedStyle = getComputedStyle(hintCleared);
    const backgroundColor = computedStyle.backgroundColor;

    if (
      backgroundColor !== "rgb(255, 0, 0)" &&
      clickedRowId === "row1" &&
      showAlert
    ) {
      alert("Nice Try! Click The Reset Button to Try Again!");
      showAlert = false;
    }
  });
}

function absoluteCorrect() {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;
  // check which row ID
  const p = parseInt(clickedRowId.replace("row", ""));
  // take all row ID based on click
  const checking = document.querySelectorAll("#" + clickedRowId + " .checking");
  const hints = document.querySelectorAll(".hint");

  for (i = 0; i < checking.length; i++) {
    checking[i].setAttribute("id", i);
    const id = checking[i].id;
    const value = checking[i].getAttribute("value");

    submitArray.push({ id, value });

    const hints = document.querySelectorAll(".hint");
    hints[i].getAttribute("value");

    const sameColor = secretCopy[i] === checking[i].value;
    const samePosition =
      secretCopy.indexOf(secretCopy[i], i) === parseInt(checking[i].id);

    // results for absolutely correct
    if (sameColor && samePosition && hints[i].value !== i) {
      console.log(i + " " + secretCopy[i] + " show red peg");
      const removed = secretCopy.splice(i, 1, secretCopy[i] + "1");
      checking[i].value = 0;
      hints[i].value = [i];
      console.log("secretCopy", secretCopy);
      console.log("secret", secret);
      hints[i].style.backgroundColor = "red";
    }
  }
}

function partialCorrect() {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;
  // check which row ID
  const p = parseInt(clickedRowId.replace("row", ""));
  // take all row ID based on click
  const checking = document.querySelectorAll("#" + clickedRowId + " .checking");
  const hints = document.querySelectorAll(".hint");

  for (let j = 0; j < checking.length; j++) {
    const value = checking[j].getAttribute("value");
    hints[j].getAttribute("value");

    if (
      secretCopy.includes(value) &&
      secretCopy.indexOf(value, 1) !== j &&
      hints[j].value === ""
    ) {
      console.log(j + " Show white peg");

      // fix splice, need fix wording "example"
      const removed = secretCopy.splice(
        secretCopy.indexOf(value),
        1,
        "example" + "1"
      );

      console.log(secretCopy);
      console.log(value);
      // add another value once checked to prevent checking items with values
      hints[j].value = [j];
      hints[j].style.backgroundColor = "white";

      // now check other spaces whether color is existent, if yes show white peg first (can edit bug later)
      // once checked add another value and add in condition to not make sure that value is undefined
    }
  }
}

// incomplete
function checkingNotFilled(event) {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;
  // check which row ID
  const p = parseInt(clickedRowId.replace("row", ""));
  // take all row ID based on click
  const checking = document.querySelectorAll("#" + clickedRowId + " .checking");

  for (i = 0; i < checking.length; i++) {
    if (checking[i].getAttribute("value") !== true) {
      console.log(i + " value is empty");
    } else {
    }
  }
}

// when click submit
const submitAns = (event) => {
  secretCopy = secret.slice();
  absoluteCorrect();
  partialCorrect();

  removeCheckingClass(event);
  openNextSubmit(event);
  removeHintClass(event);
  enableNextRow(event);
  enableNextHint(event);
  nextRowButtonColor(event);
  checkWin();
  checkLose();
};

function render() {}

function init() {
  render();

  // Start button generate secret code
  const startButton1 = document.querySelector("#startButton");
  startButton1.addEventListener("click", generateSecret);
  startButton1.addEventListener("click", moveImg);
  startButton1.addEventListener("click", firstSubmit);

  // Use event delegation to handle click events on the game board
  const gameBoard = document.querySelector("#gameBoard");
  gameBoard.addEventListener("click", function (event) {
    if (event.target.classList.contains("submit")) {
      submitAns(event);
    }
  });
}

init();
