

const degisenResimler = document.querySelector(".imgs");
const araButonu = document.querySelector(".ara");
const baglatButonu = document.querySelector(".baglat");
const konusButonu = document.querySelector(".konus");
const calmaSesi = document.querySelector("#calma-sesi"); // yada new Audio("kaynak")
// const calmaSesi = new Audio("./img/retro-ringtone .mp3")

degisenResimler.onmouseover = ()=>{
    degisenResimler.src = "./img/aslan1.jpeg"
};

degisenResimler.onmouseout = ()=>{
    degisenResimler.src = "./img/aslan2.jpeg"
};

araButonu.onclick = ()=>{
    degisenResimler.src ="./img/calan-telefon.gif"
    calmaSesi.play();
};

baglatButonu.onclick = ()=>{
    degisenResimler.src = "./img/telbağla.gif"
    calmaSesi.pause();
}

konusButonu.onclick = () =>{
    degisenResimler.src = "./img/telefon.gif"
}

//!klavyeden inputa veri girişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik

const text=document.querySelector(".textbox")
const tik=document.querySelector(".checkbox")

// checked=metodu checkbox inputun tikli olup olmadığını kontrol eder. tıklanmışsa true döndürür

//? onkeyup=klavyeden elini çektiğinde
text.onkeyup=()=>{
 if(tik.checked){
text.value=text.value.toUpperCase();

 }else{
text.value = text.value.toLowerCase();
 }

}