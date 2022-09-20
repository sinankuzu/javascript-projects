

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

  document.querySelector(".ekle").onclick = () => {
    const liste = document.querySelector(".liste");
    const dil = document.querySelector(".dil");

    liste.innerHTML += `<li>${dil.value}</li>`;
  };

  //! ekle butonuna basıldığında input a girilen değerler ul liste me eklensin
//*UZUN YOL
  // yeni girilen satiri saklamak icin bir li olusturduk.
  // const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  // const textNode = document.createTextNode(dil.value);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  // yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  // liste.appendChild(yeniLi);

console.log("hata yok");
  document.querySelector(".ekle").onclick=()=>{
const liste=document.querySelector(".liste")
const dil=document.querySelector(".dil")
console.log("hata yok");
liste.innerHTML+=`<li>${dil.value}</li>`
//!inputtaki veri listeye eklenince inputtan silinsin
dil.value=""

  }

    //!sil butonuna tıklandığında ul listesinden silme metodu olan removeChild metodunu kullanıcaz

  document.querySelector(".sil").onclick = () => {
    const liste = document.querySelector(".liste");

    liste.removeChild(liste.lastElementChild); // ul nin son child ını sildirdi
    //!liste.removeChild(liste.firstElementChild); // ul nin ilk child ını sildirdi
    liste.removeChild(liste.children[2]); // ul nin 2 indexli child ını sildirdi
  };