const screen = document.querySelector(".screen");
const start = document.querySelector(".start");
const myStop = document.querySelector(".stop");
const pause = document.querySelector(".pause");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds")



const printScreen = () => {
  if (milliseconds.textContent < 100) {
    milliseconds.textContent++;
    if (milliseconds.textContent < 10) {
      milliseconds.textContent = "0" + milliseconds.textContent;
    }
  }
  if (milliseconds.textContent == 100) {
    seconds.textContent++;
    if (seconds.textContent < 10) {
      seconds.textContent = "0" + seconds.textContent;
    }

    milliseconds.textContent = "0" + 0;
  }
  if (seconds.textContent == 60) {
    minutes.textContent++;
    if (minutes.textContent < 10) {
      minutes.textContent = "0" + minutes.textContent;
    }
    seconds.textContent = "0" + 0;
  }

  if (minutes.textContent == 60) {
    hours.textContent++;
    if (hours.textContent < 10) {
      hours.textContent = "0" + hours.textContent;
    }
    minutes.textContent = "0" + 0;
  }
  if (hours.textContent == 100) {
    hours.textContent = "0" + 0;
  }
};


start.addEventListener("click", () => {
   
interval = setInterval(printScreen, 10);

    
})

pause.addEventListener("click", () =>{
    clearInterval(interval);
})

myStop.addEventListener("click",() =>{

    clearInterval(interval);
    milliseconds.textContent = "00"
    seconds.textContent = "00" 
    minutes.textContent = "00" 
    hours.textContent = "00" 
})
