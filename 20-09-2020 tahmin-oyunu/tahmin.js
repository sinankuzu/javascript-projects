const againButton = document.querySelector(".again")
const checkButton = document.querySelector(".check");
let sayi =Math.floor(Math.random() * 20);
const arttirAzalt = document.querySelector(".arttir-azalt")
const winLose = document.querySelector(".win-lose")
const yazilanSayi = document.querySelector(".yazilan-sayi");
const kalanHak = document.querySelector(".kalan-hak")
const bildinMi = document.querySelector(".bildin-mi")
let score = 10;
console.log(sayi);


checkButton.onclick = () => {
    
     const girilenTahmin = document.querySelector(".tahmin").value;
     yazilanSayi.innerHTML = `girilen sayi: ${girilenTahmin}`;
     
    if (score > 1 && girilenTahmin != sayi) {
    
      document.querySelector("body").style.backgroundColor = "red";
      score -= 1;
      console.log(score);
      kalanHak.innerHTML = `Kalan hakkiniz: ${score}`;
      if (Number(girilenTahmin) > sayi) {
        arttirAzalt.innerHTML = "Azalt";
      } else {
        arttirAzalt.innerHTML = "Arttir";
      }
    }
    else if(girilenTahmin == sayi) {
      winLose.innerHTML = "YOU WON! NICE!!!";
      document.querySelector("body").style.backgroundColor = "green";
      yazilanSayi.innerHTML = "girilen sayi:?";
      kalanHak.innerHTML = `Kalan hakkiniz:?`;
      arttirAzalt.innerHTML ="Girdiginiz sayiya gore burda arttir veya azalt yazicak";
      bildinMi.innerHTML = `${sayi}`;
    }
  
  else{
    winLose.innerHTML = "GAME OVER YOU LOST";
    kalanHak.innerHTML = `Kalan hakkiniz:0`;
    yazilanSayi.innerHTML = "girilen sayi:?";
    arttirAzalt.innerHTML ="Girdiginiz sayiya gore burda arttir veya azalt yazicak";
  }
}



againButton.onclick=()=>{
    document.querySelector("body").style.backgroundColor = "grey";
    score = 10;
    sayi = Math.floor(Math.random() * 20);
    kalanHak.innerHTML = `Kalan hakkiniz:10`;
    yazilanSayi.innerHTML = "girilen sayi:?";
    winLose.innerHTML = "";
    arttirAzalt.innerHTML = "Girdiginiz sayiya gore burda arttir veya azalt yazicak";
    bildinMi.innerHTML = `?`;
    console.log(sayi);
}
