const numberButtons = document.querySelectorAll(".numbers")
// const myNumber = document.querySelector()
const screen1 = document.querySelector(".screen1")
const screenOperator = document.querySelector(".screenOperator")
const screen2 = document.querySelector(".screen2")
const calculator = document.querySelector(".calculator")
const operators = document.querySelector(".orange")

 console.log(numberButtons.forEach((x)=>console.log(x)));

 
numberButtons[0].onclick = () =>{
screen1.textContent = numberButtons[0].textContent;
console.log(screen1.textContent);
}

calculator.onclick = (e) =>{
    if(e.target.classList.contains("numbers")){
        screen2.textContent = e.target.textContent;
    }

    else if(e.target.classList.contains("orange")){
        screenOperator.textContent = e.target.textContent;
        screen1.textContent = screen2.textContent;
        screen2.textContent = "";  
        if(e.target.textContent == "+"){
          screenOperator.textContent = e.target.textContent;
          screen1.textContent = screen2.textContent;
          screen2.textContent = "";  
        }
        
        
    }
}