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
// console.log(getData("Berlin"))

// console.log(getData("Berlin"));

// const display = () => {

// }

const printScreen = (city) => {
const iconUrl = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
myCards.innerHTML = `<div class="card">
    <div class="names">${city.name}</div>
    <div class="celcius">${city.main.temp}</div>
    <div class="icons"><img src="${iconUrl}"></img></div>
    <div class="condition">${city.weather[0].description}</div>`
}

// getData("Berlin");
// ekranaBastir()
// console.log(getData("Berlin"));

button.onclick= () => {
    const x = input.value;
    console.log(getData(x))
}









// const liste = [];
// const form = document.querySelector("form");
// const not = document.querySelector(".not");
// const input = document.querySelector(".city");
// const ekran = document.querySelector(".ekran");
// const buton = document.querySelector(".btn");
// const idNumber = "07d79aac0de6642739cbd81b62e66918";
// // const getir = (city) => {
// //   fetch(
// //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${idNumber}&units=metric`
// //   )
// //     .then((response) => response.json())
// //     .then((data) => ekranabastir(data));
// // };

// // buton.onclick = (event) => {
// //   event.preventDefault()
// //   if (liste.includes(input.value)) {
// //     not.textContent =
// //       "You already know the weater for a city, pelease search for enother City ";
// //   }
// //   else{
// //     getir(input.value);
// //     liste.push(input.value);
// //     console.log(liste);
// //     input.value = "";
// //   }

// // };




// const ekranabastir = (data) => {
//   const { name, main, sys, weather } = data;
//   console.log(name);
//   const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
//   ekran.innerHTML += `<div class=" ms-5 card border border-1" style="width: 18rem; height:25rem;">
  
//   <div class="card-body">
//      <h3 class="card-title mt-4 text-info"> <span>${name}</span>  <sup class='text-white bg-warning'>${
//     sys.country
//   }</sup> </h3>
//     <p class="card-text mt-2 display-1 mb-2 fw-bold ">${Math.ceil(
//       main.temp
//     )}<sup class=''>C</sup></p>
//     <img class='resim' src=${iconUrl}> </img>
//    <h3 class="card-text mt-5 text-info fw-light">${weather[0].description.toUpperCase()}</h3>
//   </div>
// </div>
//     `;
// };


// //get the infos
// let cityName;
// const button = document.querySelector(".btn");
// const display = document.querySelector(".kapsayici-div");
// let cities = [];

// const getInfos = (cityName) => {
//   console.log(cityName);

//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d9b53b6af071e91297e071e6ffc3e133`
//   )
//     .then((response) => response.json())
//     .then((data) => pressDisplay(data));
//   document.querySelector(".inp-text").value = "";
// };

// button.onclick = () => {
//   cityName = document.querySelector(".inp-text").value;
//   cityName = cityName.toUpperCase();
//   if (!cities.includes(cityName)) {
//     document.querySelector(".samecity-display").textContent = "";
//     cities.push(cityName);
//     console.log(cities);
//     getInfos(cityName);
//   } else {
//     document.querySelector(
//       ".samecity-display"
//     ).textContent = `You already know the weather for ${cityName}. Please search for the
//       another city 🌏`;
//   }
// };

// document.querySelector(".inp-text").onkeydown = (tus) => {
//   if (tus.keyCode === 13) {
//     button.onclick();
//   }
// };

// //ICONS PART
// const pressDisplay = (city) => {
//   console.log(city);
//   if (city.message == "city not found") {
//     document.querySelector(
//       ".samecity-display"
//     ).textContent = `${cityName} not found!`;
//   } else {
//     weather = Object.values(city.weather)[0]["description"];

//     display.innerHTML += `<div class="bg-light">
//     <h2 class="sehirAdi">${
//       city.name
//     } <sup class"country-code" style="background-color:orange;  border-radius:50%;">${
//       city.sys.country
//     }</sup></h2>
//     <h5 class="derece">${Math.ceil(
//       city.main.temp - 273.15
//     )}<sup class="celcius">°C</sup></h5>
//     <p><img src="http://openweathermap.org/img/wn/${
//       Object.values(city.weather)[0].icon
//     }@4x.png"></p>
//     <p class="situation">${Object.values(city.weather)[0].description}</p>
//   </div>`;
//     console.log(`${Object.values(city.weather)[0].icon}`);
//   }
// };