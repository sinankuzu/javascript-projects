const form = document.querySelector("section.top-banner form");
const input = document.querySelector("div.container input");
const msg = document.querySelector(".container .msg");
const list = document.querySelector(".ajax-section .container .cities")
// axios icin link html'e <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
localStorage.setItem("apiKey", ("d9b53b6af071e91297e071e6ffc3e133"))

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getWeatherDataFromApi()
    form.requestFullscreen();

})

const getWeatherDataFromApi = async() => {
    // alert("Api data fetched")    
    const apiKey = localStorage.getItem("apiKey");
    const cityName = input.value;
    const units = "metric";
    const lang = "tr";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&$lang=${lang}`;
  
    const response = await fetch(url).then(response => response.json())
    // console.log(response);
    const {name,main,sys,weather} = response;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    const cityNameSpanNodeList = list.querySelectorAll(".city span");
    const cityNameSpanArray = [...cityNameSpanNodeList];

    if(cityNameSpanArray.length > 0){
        const filteredArray = cityNameSpanArray.filter(span => span.innetText == name)
        if(filteredArray.length > 0){
            msg.innerText = `you already know the weather for ${name}. Please search for another city`;
            setTimeout(() =>{
                msg.innerText = ``
            },5000)
            return;
        }
    }

    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
                <img class="city-icon" src="${iconUrl}">
                <figcaption>${weather[0].description}</figcaption>
            </figure>`;

            // append sona, prepend basa ekler
            list.prepend(createdLi)
}