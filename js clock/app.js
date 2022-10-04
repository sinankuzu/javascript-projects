const myClock = document.querySelector(".clock")
const hours = getHours();
const minutes = getMinutes();
const seconds = getSeconds();

myClock.innerHTML = `${hours}${minutes}${seconds}`;