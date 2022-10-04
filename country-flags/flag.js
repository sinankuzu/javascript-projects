const getirCountry =async (name) =>{
try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}` );
    if (!res.ok) {
      throw new Error("url de hata var");
    }
    const data = await res.json();
    // console.log(data);
    // console.log(data[0]);
    ekranaBastir(data[0])
} catch (error) {
    console.log(error);
}


}
let dizi = ["turkey", "peru", "canada", "germany"];
dizi.forEach((a) => {
  getirCountry(a);
});
// getirCountry("turkey")

ekranaBastir = (country) =>{
    document.querySelector(
      ".countries"
    ).innerHTML += `<div class="card text-start w-50 shadow-lg bg-light">
      <img src=${country.flags.png} class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">${country.name.common}</h5>
         <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
         <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${country.capital} </li>
         <li class="list-group-item"><i class="fas fa-lg fa-comments"></i> ${Object.values(country.languages)}</li>
         <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"> ${Object.values(country.currencies)[0].name}</i> </li>
      </ul>
   </div> `;    
}