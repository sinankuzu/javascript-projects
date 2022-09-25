const numberButtons = document.querySelectorAll(".numbers");
const screen1 = document.querySelector(".screen1");
const screenOperator = document.querySelector(".screenOperator");
const screen2 = document.querySelector(".screen2");
const calculator = document.querySelector(".calculator");
const operators = document.querySelector(".orange");
let sonuc = document.querySelector(".result");
const sifir = document.querySelector(".number0");
// let sonuc = "";
let islem = "";
let a = ""

calculator.onclick = (e) => {
  const hesapMakina = function (z) {
    screen2.textContent = sonuc.textContent;
    sonuc = "";
    if (e.target.textContent == "+") {
      screen2.textContent = y + x;
      sonuc = `y + x`;
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
    islem = screenOperator.textContent;
    screen1.textContent = screen2.textContent;
    screen2.textContent = "";
    if (e.target.textContent == "=") {
      if (islem == "+") {
        screen2.textContent = y + x;
        sonuc = y + x;
        
      } else if (islem == "-") {
        screen2.textContent = y - x;
        sonuc=y - x;
      } else if (islem == "x") {
        screen2.textContent = y * x;
        sonuc = y * x;
      } else if (islem == "÷") {
        // screen2.textContent = y / x;
        sonuc = y / x;
      }

      screen1.textContent = "";
      screenOperator.textContent = "";
      screen2.textContent = sonuc;
    }
    
  };
 
  if (e.target.classList.contains("numbers")) {
    
    screen2.textContent += e.target.textContent;
    y = Number(screen1.textContent);
    x = Number(screen2.textContent);
    if(screen2.textContent.startsWith("0")){
      
      screen2.textContent = "0";
    }

   
    
  } 
  else if (e.target.classList.contains("orange")) {
    
    if (y == "") {
      screenOperator.textContent = e.target.textContent;
      screen1.textContent = screen2.textContent;
      screen2.textContent = "";
    } else {
      hesapMakina(e.target.textContent);
      screenOperator.textContent = e.target.textContent;
    }
    
   
  }
};
