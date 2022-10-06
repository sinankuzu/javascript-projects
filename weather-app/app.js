const myApiKey = "d9b53b6af071e91297e071e6ffc3e133";
const myCards = document.querySelector(".cards");
const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const myError = document.querySelector(".error");
const cityList = [];

const getData = (city) => {
  const res = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => printScreen(data));
};

const printScreen = (city) => {
  const iconUrl = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
  myCards.innerHTML += `<div class="card">
    <div class="names">${city.name}<sup class="country">${
    city.sys.country
  }</sup></div>
    <div class="celcius">${Math.ceil(city.main.temp)}<sup">°</sup></div>
    <div class="icons"><img src="${iconUrl}"></img></div>
    <div class="condition">${city.weather[0].description}</div>`;
};

button.onclick = () => {
  if (cityList.includes(input.value.toLowerCase())) {
    myError.textContent = `You already added ${input.value}. Please enter another city.`;
  } else {
    getData(input.value);
    cityList.push(input.value.toLowerCase());
  }
  input.value = "";
  input.focus();
};
