// console.log("test");

/*----- constants -----*/
const colorCode = ["orange", "yellow", "blue", "green", "purple", "pink"];
const submitBut = document.querySelectorAll(".submit");
console.log(submitBut);

const submitArray = [];
const feedbackArray = [];

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
generateSecret();

// click submitButton, run submit and check answer against secret
const submitButton = (event) => {
  for (let i = 0; i < submitBut.length; i++) {
    submitBut[i].addEventListener("click", submitAns);
  }
};

// const nextRowColorClick = (event) => {
//   // get row ID
//   const clickedRowId = event.target.closest("tr").id;

//   //check which row ID
//   const p = parseInt(clickedRowId.replace("row", ""));

//   // take all row ID based on click
//   const checkers = document.querySelectorAll("#" + clickedRowId + " .checking");

//   for (let i = 0; i < checkers.length; i++) {
//     submitBut[i].addEventListener("click", changeButtonColor);
//   }
// };

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

const submitAns = (event) => {
  // get row ID
  const clickedRowId = event.target.closest("tr").id;

  //check which row ID
  const p = parseInt(clickedRowId.replace("row", ""));

  // take all row ID based on click
  const checking = document.querySelectorAll("#" + clickedRowId + " .checking");

  const hints = document.querySelectorAll(".hint");

  console.log(submitArray);

  secretCopy = secret.slice();
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
  removeCheckingClass(event);
  removeHintClass(event);
  enableNextRow(event);
  enableNextHint(event);
  nextRowButtonColor(event);
};

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

  // will check answer against secret
  submitButton();

  // after submit, cannot click previous choices and submit button
  const submit1Button = document.querySelectorAll(".submit");
  submit1Button.forEach(function (submitButton) {
    submitButton.addEventListener("click", removeCheckingClass);
    submitButton.addEventListener("click", enableNextRow);
  });
}

init();

//breakdown when submit what to check for

//1. put answer into an array
//2. check color of a1 vs secretcode if !== to all 4, produce white
//3. check color of a1 if, absolute correct, produce red
//4. check color of a1, if color is correct, position wrong, produce white

// to note, a2 needs to check a1's color, a3 needs to check a1,a2, a4 needs to check a1,a2,a3

//* when click submit, change class to "checked" and "checked" will disable clicking
//* after click submit, the row above will be clickable
//* row above will generate submit button

//! will add on submit proc later, dishing out the inner codes first
// console.log(checking[0].id);

// generate ID, assign 0,1,2,3 to buttons and push to submitArray

// console.log(submitArray[0].value);
// console.log(secret);

// if (submitArray[0].value === secret[0]) {
//   console.log("show red peg");
// }

// create for loop, everytime it is pushed into submitArray, will check against secret
// if submitArray[0] !== true, check against submitArray[i] i--

// removes checking only row 10 and disable submit button after click
// need to fix to row10 -1 ...

// function removeCheckingClass() {
//   let p = 10;
//   // take all row10 checking
//   const buttons = document.querySelectorAll("#row" + p + " .checking");

//   // disable the submit button
//   const submitButton = document.querySelector("#row" + p + " .submit");
//   submitButton.disabled = true;

//   // remove all row10 checking class
//   buttons.forEach(function (button) {
//     if (button.classList.contains("checking")) {
//       button.classList.remove("checking");
//       button.classList.add("checked");
//       console.log(buttons);
//     }
//   });
//   p--;
// }

// function removeCheckingClass(event) {
//   const clickedRowId = event.target.closest("tr").id;
//   console.log(clickedRowId);

//   const p = parseInt(clickedRowId.replace("row", ""));
//   const buttons = document.querySelectorAll("#" + clickedRowId + " .checking");

//   const submitButton = document.querySelector("#" + clickedRowId + " .submit");
//   submitButton.disabled = true;

//   // remove all rowX checking class
//   buttons.forEach(function (button) {
//     if (button.classList.contains("checking")) {
//       button.classList.remove("checking");
//       button.classList.add("checked");
//       console.log(p);
//     }
//   });
// }

// document.querySelectorAll(".submit").forEach(function (submitButton) {
//   submitButton.addEventListener("click", removeCheckingClass);
// });
