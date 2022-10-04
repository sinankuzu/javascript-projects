const myClock = document.querySelector(".clock")
const myDate = document.querySelector(".my-date")
const myTime = new Date()
let hours = myTime.getHours();
let minutes = myTime.getMinutes();
let seconds = myTime.getSeconds();
let days = myTime.getDate();
let months = myTime.getMonth() + 1;
let years = myTime.getYear() + 1900;

if (hours <10)hours = "0" + hours;

if(minutes <10)minutes = "0" + minutes;

if (seconds <10)seconds = "0" + seconds;

if(days <10)days = "0" + days;

if (months <10)months = "0" + months;



    
    myClock.innerHTML = `${hours}:${minutes}:${seconds}`;
    myDate.innerHTML = `${days}:${months}:${years}`;
    location.reload()

    


