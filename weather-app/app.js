const myApiKey = "d9b53b6af071e91297e071e6ffc3e133";
const myCards = document.querySelector(".container");
const input = document.querySelector("input");
const button = document.querySelector("button")
const getData = (city) =>
{
    
    const res = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) =>printScreen(data));
    
};


const printScreen = (city) => {
const iconUrl = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
myCards.innerHTML = `<div class="card">
    <div class="names">${city.name}</div>
    <div class="celcius">${city.main.temp}</div>
    <div class="icons"><img src="${iconUrl}"></img></div>
    <div class="condition">${city.weather[0].description}</div>`
}



button.onclick= () => {
    const x = input.value;
    console.log(getData(x))
}


