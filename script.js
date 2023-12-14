"use strict";
let x = "";
let y = 0;
// let y = 0;
let operand1 = "";
let dotCount = 0;
const divNum = document.querySelectorAll(".div-num");
const divSings = document.querySelectorAll(".div-signs");
const divUpper = document.querySelector(".div-upper");
const divLower = document.querySelector(".div-lower");
const clear = document.querySelector(".clear");
for (let i = 0; i < divNum.length; i++) {
  divNum[i].addEventListener("click", function () {
    if (divNum[i].textContent == 1) {
      x = `${x}1`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 2) {
      x = `${x}2`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 3) {
      x = `${x}3`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 4) {
      x = `${x}4`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 5) {
      x = `${x}5`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 6) {
      x = `${x}6`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 7) {
      x = `${x}7`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 8) {
      x = `${x}8`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 9) {
      x = `${x}9`;
      divLower.textContent = x;
    }
    if (divNum[i].textContent == 0) {
      x = `${x}0`;
      divLower.textContent = x;
    }
  });
}
for (let i = 0; i < divSings.length; i++) {
  divSings[i].addEventListener("click", function () {
    if (divSings[i].textContent == "+") {
      if (operand1 == "") {
        // operand2 = operand1;
        operand1 = "+";
        y = Number(x);
        divUpper.textContent = y + " + ";
        x = "";
      } else {
        if (operand1 == "+") {
          y = y + Number(x);
          operand1 = "+";
          x = "";
          divUpper.textContent = y + " + ";
        } else if (operand1 == "-") {
          y = y - Number(x);
          operand1 = "+";
          x = "";
          divUpper.textContent = y + " + ";
        } else if (operand1 == "/") {
          y = y / Number(x);
          operand1 = "+";
          x = "";
          divUpper.textContent = y + " + ";
        } else if (operand1 == "*") {
          y = y * Number(x);
          operand1 = "+";
          x = "";
          divUpper.textContent = y + " + ";
        }
      }
      dotCount = 0;
    } else if (divSings[i].textContent == "-") {
      if (operand1 == "") {
        // operand2 = operand1;
        operand1 = "-";
        y = Number(x);
        divUpper.textContent = y + " - ";
        x = "";
      } else {
        if (operand1 == "+") {
          y = y + Number(x);
          operand1 = "-";
          x = "";
          divUpper.textContent = y + " - ";
        } else if (operand1 == "-") {
          y = y - Number(x);
          operand1 = "-";
          x = "";
          divUpper.textContent = y + " - ";
        } else if (operand1 == "/") {
          y = y / Number(x);
          operand1 = "-";
          x = "";
          divUpper.textContent = y + " - ";
        } else if (operand1 == "*") {
          y = y * Number(x);
          operand1 = "-";
          x = "";
          divUpper.textContent = y + " - ";
        }
      }
      dotCount = 0;
    } else if (divSings[i].textContent == "*") {
      if (operand1 == "") {
        // operand2 = operand1;
        operand1 = "*";
        y = Number(x);
        divUpper.textContent = y + " * ";
        x = "";
      } else {
        if (operand1 == "+") {
          y = y + Number(x);
          operand1 = "*";
          x = "";
          divUpper.textContent = y + " * ";
        } else if (operand1 == "-") {
          y = y - Number(x);
          operand1 = "*";
          x = "";
          divUpper.textContent = y + " * ";
        } else if (operand1 == "/") {
          y = y / Number(x);
          operand1 = "*";
          x = "";
          divUpper.textContent = y + " * ";
        } else if (operand1 == "*") {
          y = y * Number(x);
          operand1 = "*";
          x = "";
          divUpper.textContent = y + " * ";
        }
      }
      dotCount = 0;
    } else if (divSings[i].textContent == "/") {
      if (operand1 == "") {
        // operand2 = operand1;
        operand1 = "/";
        y = Number(x);
        divUpper.textContent = y + " / ";
        x = "";
      } else {
        if (operand1 == "+") {
          y = y + Number(x);
          operand1 = "/";
          x = "";
          divUpper.textContent = y + " / ";
        } else if (operand1 == "-") {
          y = y - Number(x);
          operand1 = "/";
          x = "";
          divUpper.textContent = y + " / ";
        } else if (operand1 == "/") {
          y = y / Number(x);
          operand1 = "/";
          x = "";
          divUpper.textContent = y + " / ";
        } else if (operand1 == "*") {
          y = y * Number(x);
          operand1 = "/";
          x = "";
          divUpper.textContent = y + " / ";
        }
      }
      dotCount = 0;
    } else if (divSings[i].textContent == "=") {
      if (operand1 == "") {
        // // operand2 = operand1;
        // divUpper.textContent = ``;
      } else {
        if (operand1 == "+") {
          y = y + Number(x);
          operand1 = "";
          x = y;
          divUpper.textContent = y + " = ";
        } else if (operand1 == "-") {
          y = y - Number(x);
          operand1 = "";
          x = y;
          divUpper.textContent = y + " = ";
        } else if (operand1 == "/") {
          y = y / Number(x);
          operand1 = "";
          x = y;
          divUpper.textContent = y + " = ";
        } else if (operand1 == "*") {
          y = y * Number(x);
          operand1 = "";
          x = y;
          divUpper.textContent = y + " = ";
        }
      }
      dotCount = 0;
    } else if (divSings[i].textContent == ".") {
      if (dotCount == 0 && !x.includes(".")) {
        x = `${x}.`;
        divLower.textContent = x;
        dotCount++;
      }
      // } else if (divs[i].textContent == "x2") {
      //   if (x == "") {
      //     y = y * y;
      //     x = y;
      //     divUpper.textContent = y + " ^2";
      //   } else {
      //     x = Number(x) * Number(x);
      //   }
    } else if (divSings[i].textContent == "%") {
      if (x == "") {
        y = y * 0.01;
        x = y;
        divUpper.textContent = y + "%";
      } else if (operand1 == "") {
        y = Number(x) * 0.01;
        x = y;
        divUpper.textContent = y + " % ";
      } else {
        if (operand1 == "+") {
          x = Number(x) * 0.01;
          y = y + x;
          operand1 = "";
          x = "";
          divUpper.textContent = y + " % ";
        } else if (operand1 == "-") {
          x = Number(x) * 0.01;
          y = y - x;
          operand1 = "";
          x = "";
          divUpper.textContent = y + " = ";
        } else if (operand1 == "/") {
          x = Number(x) * 0.01;
          y = y / x;
          operand1 = "";
          x = "";
          divUpper.textContent = y + " = ";
        } else if (operand1 == "*") {
          x = Number(x) * 0.01;
          y = y * x;
          operand1 = "";
          x = "";
          divUpper.textContent = y + " = ";
        }
      }
    } else if (divSings[i].textContent == "x2") {
      if (x == "") {
        y = y * y;
        x = y;
        divUpper.textContent = y;
      } else if (operand1 == "") {
        y = Number(x) * Number(x);
        x = y;
        divUpper.textContent = y;
      } else {
        if (operand1 == "+") {
          x = Number(x) * Number(x);
          y = y + x;
          operand1 = "";
          x = y;
          divUpper.textContent = y;
        } else if (operand1 == "-") {
          x = Number(x) * Number(x);
          y = y - x;
          operand1 = "";
          x = y;
          divUpper.textContent = y;
        } else if (operand1 == "/") {
          x = Number(x) * Number(x);
          y = y / x;
          operand1 = "";
          x = y;
          divUpper.textContent = y;
        } else if (operand1 == "*") {
          x = Number(x) * Number(x);
          y = y * x;
          operand1 = "";
          x = y;
          divUpper.textContent = y;
        }
      }
    } else if (divSings[i].textContent == "+/-") {
      if (x == "" && y !== "") {
        y = y * -1;
        x = y;
        divUpper.textContent = y;
      } else {
        x = Number(x) * -1;
        y = x;
        divUpper.textContent = y;
      }
    }
  });
}
clear.addEventListener("click", function () {
  x = "";
  y = 0;
  operand1 = "";
  dotCount = 0;
  divLower.textContent = ``;
  divUpper.textContent = ``;
});
