const myApiKey = "ffaca31ba517ef66047260927e1f69e5";
const myCards = document.querySelector(".container")
const getData = (city) =>
{
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((responseData) => console.log(responseData));
};


console.log(getData("Berlin"));

const display = () => {

}


myCards.innerHTML = `<div class="card">
    <div class="names">${}</div>
    <div class="celcius">${}</div>
    <div class="icons">${}</div>
    <div class="condition">${}</div>`
