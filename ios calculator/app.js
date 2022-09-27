const numberButtons = document.querySelectorAll(".numbers");
const screen1 = document.querySelector(".screen1");
const screenOperator = document.querySelector(".screenOperator");
const screen2 = document.querySelector(".screen2");
const calculator = document.querySelector(".calculator");
const operators = document.querySelector(".orange");
const sifir = document.querySelector(".number0");
const myDot = document.querySelector(".dot");

let islem = "";
let a = "";

calculator.onclick = (e) => {
  
  if (e.target.classList.contains("numbers")) {
   if(islem == "="){
    screen2.textContent = "";
   }
    if (
      screen2.textContent.startsWith("0") &&
      e.target.textContent == "0" &&
      screen2.textContent.indexOf(".") != 1 &&
      screen2.textContent.indexOf(".") != 1
    ) {
      screen2.textContent = "0";
    } else {
      if (
        screen2.textContent.startsWith("0") &&
        screen2.textContent.indexOf(".") != 1
      ) {
        screen2.textContent = "";
      }

      screen2.textContent += e.target.textContent;
      y = Number(screen1.textContent);
      x = Number(screen2.textContent);
    }
    if (screen2.textContent.startsWith(".")) {
      screen2.textContent = "0.";
    }
    if (screen2.textContent.includes(".")) {
      myDot.classList.add("block");
    }
  }
  const hesapMakina = function () {
    if (islem == "+") {
      screen2.textContent = y + x;
    } else if (islem == "-") {
      screen2.textContent = y - x;
    } else if (islem == "x") {
      screen2.textContent = y * x;
    } else if (islem == "÷") {
      screen2.textContent = y / x;
    }
  };

  if (e.target.classList.contains("equal")) {
    hesapMakina();
    screen1.textContent = "";
    screenOperator.textContent = "";
    islem = "="
  }
 if (e.target.classList.contains("orange") && islem) {
   hesapMakina();
   islem = e.target.textContent;
   screenOperator.textContent = e.target.textContent;
   screen1.textContent = screen2.textContent;
   screen2.textContent = "";
 }

  if (e.target.classList.contains("orange") && islem == "") {
    islem = e.target.textContent;

    screenOperator.textContent = e.target.textContent;
    if (y == "") {
      screen1.textContent = screen2.textContent;
      screen2.textContent = "";
    } else if (y && x) {
      hesapMakina();
    }
  }
 
  if (e.target.classList.contains("perc")) {
    if (screen1.textContent == "") {
      screen2.textContent = screen2.textContent * 0.01;
    } else {
      screen2.textContent = screen1.textContent * (screen2.textContent * 0.01);
      screen1.textContent = "";
      screenOperator.textContent = "";
    }
  }

  if (e.target.classList.contains("ac")) {
    screen1.textContent = "";
    screenOperator.textContent = "";
    screen2.textContent = "";
  }

  if (e.target.classList.contains("plus-minus")) {
    screen2.textContent = screen2.textContent * -1;
  }
  if (screen2.textContent == "") {
    myDot.classList.remove("block");
  }
};
