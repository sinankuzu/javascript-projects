const yemeklerim = document.querySelector(".food")
const myInput = document.querySelector("#ara");
const ulkeler = document.querySelectorAll(".ülke");
let myList = [];

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
.then((response) => response.json()).then((results) =>{ 
    myList = results.meals;
    
    printScreen(myList)});

const printScreen = (data) => {
    yemeklerim.innerHTML = "";
    data.forEach((a)=>{
yemeklerim.innerHTML += `<div class="col-md-3 p-4 m-4"><p>${a.strMeal}</p>   <img class="malzeme" style=width:200px  src=${a.strMealThumb} class="card-img-top" ></div>`;
    })
    
}

myInput.oninput = () =>{
   const filtered = myList.filter((a) =>
     a.strMeal.toLowerCase().includes(myInput.value.toLowerCase())
   );
   printScreen(filtered);
}

ulkeler.forEach((a)=>{
    
    a.onclick = () =>{
        
       fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
         .then((response) => response.json())
         .then((results) =>printScreen(results.meals)
         );
    }
})




//!ilk ekrandaki yemek resimlerinin api den çekilmesi

// www.themealdb.com/api/json/v1/1/search.php?s=
//?console da kontrol edip
//?ekrana bas fonksiyonuna yollama

//!api den gelen verilerin ekrana bastırılması

// DİV.innerHTML=""
{/* <div class="col-md-3 p-4 m-4"><p>${}</p>   <img class="malzeme" style=width:200px  src=${} class="card-img-top" ></div> */}


//!arama inputunda arama yapma (oninput kulanarak)

// input.target.value

//?ekranı güncelle

//!bayraklara tıklandığında, ilgili api den verilerin çekilmesi ve ekranabastır fonksiyonuna gönderme

// `www.themealdb.com/api/json/v1/1/filter.php?a=${ülke}`

//?ekrana bastıra gönder
// 