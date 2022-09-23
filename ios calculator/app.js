const numberButtons = document.querySelectorAll(".numbers");
const screen1 = document.querySelector(".screen1");
const screenOperator = document.querySelector(".screenOperator");
const screen2 = document.querySelector(".screen2");
const calculator = document.querySelector(".calculator");
const operators = document.querySelector(".orange");
let sonuc = "";
let islem = "";

calculator.onclick = (e) => {
  const hesapMakina = function (z) {
    if (e.target.textContent == "+") {
      screen2.textContent = y + x;
      sonuc = y + x;
      islem = "+";
    } else if (e.target.textContent == "-") {
      screen2.textContent = y - x;
      sonuc = y - x;
      islem = "-";
    } else if (e.target.textContent == "x") {
      screen2.textContent = y * x;
      sonuc = y * x;
      islem = "*";
    } else if (e.target.textContent == "÷") {
      screen2.textContent = y / x;
      sonuc = y / x;
      islem = "/";
    }

    screen1.textContent = screen2.textContent;
    screen2.textContent = "";
  };
  if (screen2.textContent == "") {
    let y = "";
    let x = "";
  }
  if (e.target.classList.contains("numbers")) {
    
    screen2.textContent += e.target.textContent;
    
    x = Number(screen2.textContent);
    y = Number(screen1.textContent);
  } else if (e.target.classList.contains("orange")) {
    if (y == "") {
      screenOperator.textContent = e.target.textContent;
      screen1.textContent = screen2.textContent;
      screen2.textContent = "";
    } else {
      hesapMakina(e.target.textContent);
    }
    if (e.target.textContent == "=") {
      if (islem == "+") {
        screen2.textContent = y + x;
        sonuc = y + x;
      } else if (islem == "-") {
        screen2.textContent = y - x;
        sonuc = y - x;
      } else if (islem == "x") {
        screen2.textContent = y * x;
        sonuc = y * x;
      } else if (islem == "÷") {
        screen2.textContent = y / x;
        sonuc = y / x;
      }
      screen2.textContent = sonuc;
      screen1.textContent = "";
      screenOperator.textContent = "";
    }
   
  }
};
