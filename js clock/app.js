const myClock = document.querySelector(".clock")
const myTime = new Date()
const hours = myTime.getHours();
const minutes = myTime.getMinutes();
const seconds = myTime.getSeconds();
console.log(hours);
while(true){
    myClock.innerHTML = `${hours}:${minutes}:${seconds}`;

}
