let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset-btn");
let X = document.querySelector(".xwin");
let O = document.querySelector(".owin");
let currx = true;
let count = 0;
let xwin = 0;
let owin = 0;

// alert("hello connected");

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const resetGamefuntion = () => {
  currx = true;
  count = 0;
  enableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (currx) {
      box.innerHTML = "<i style='color: #ff4d4d;'>X</i>";
    } else {
      box.innerHTML = "<i style='color:#4da6ff;'>O</i>";
    }

    currx = !currx;
    box.disabled = true;
    count++;

    let winner = checkwinnner();

    if (count === 9 && !winner) {
      draw();
    }
  });
});

const draw = () => {
  alert("game was draw reseting board..");
  resetGamefuntion();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("win");
  }
};

const checkwinnner = () => {
  for (let val of win) {
    let pos1 = boxes[val[0]].innerText;
    let pos2 = boxes[val[1]].innerText;
    let pos3 = boxes[val[2]].innerText;

    let str = currx ? "O" : "X";

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        disableBoxes();

        boxes[val[0]].classList.add("win");
        boxes[val[1]].classList.add("win");
        boxes[val[2]].classList.add("win");
        if(str === "X"){
          xwin++;
        } else {
          owin++;
        }
        X.innerText = xwin;
        O.innerText = owin;
        resetGame.innerText = "New Game";
        alert(`Winner is ${str}`);
        return true;
      }
    }
  }
};


resetGame.addEventListener("click", resetGamefuntion);

resetGame.addEventListener("click", () => {
  if(resetGame.innerText === "New Game"){
    resetGame.innerText = "Reset Game";
  }
});