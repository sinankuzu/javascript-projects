const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
let sayi = Math.floor(Math.random() * 20);
const arttirAzalt = document.querySelector(".arttir-azalt");
const winLose = document.querySelector(".win-lose");
const yazilanSayi = document.querySelector(".yazilan-sayi");
const kalanHak = document.querySelector(".kalan-hak");
const bildinMi = document.querySelector(".bildin-mi");
const gifNedir = document.querySelector(".gifler2");
let score = 10;
console.log(sayi);

 let topScore = localStorage.getItem("topScore") || 0;
 document.querySelector(".topScore").textContent = topScore;
// gifNedir.onmouseover = () => {
//   gifNedir.src = "./img/fail-hay.gif";
// };

checkButton.onclick = () => {
  const girilenTahmin = document.querySelector(".tahmin").value;
  yazilanSayi.innerHTML = `The Number You Have Entered Is: ${girilenTahmin}`;

  if (score > 1 && girilenTahmin != sayi) {
    document.querySelector("body").style.backgroundColor = "crimson";
    score -= 1;
    console.log(score);
    kalanHak.innerHTML = `Remaining Tries: ${score}`;
    if (Number(girilenTahmin) > sayi) {
      arttirAzalt.innerHTML = "LESS!!!";
    } else {
      arttirAzalt.innerHTML = "MORE!!!";
    }
  } else if (girilenTahmin == sayi) {
    winLose.innerHTML = "YOU WON! NICE!!!";
    document.querySelector("body").style.backgroundColor = "green";
    yazilanSayi.innerHTML = "The Number You Have Entered Is:?";
    kalanHak.innerHTML = `Remaining Tries:?`;
    arttirAzalt.innerHTML = "MORE or LESS";
    bildinMi.innerHTML = `${sayi}`;
    gifNedir.src = "./img/success.gif";
    if (skor > topScore) {
      localStorage.setItem("topSkor", skor);
    }
  } else {
    gifNedir.src = "./img/fail-hay.gif";
    winLose.innerHTML = "GAME OVER YOU LOST";
    kalanHak.innerHTML = `Remaining Tries:0`;
    yazilanSayi.innerHTML = "The Number You Have Entered Is:?";
    arttirAzalt.innerHTML = "MORE or LESS";
    document.querySelector("body").style.backgroundColor = "red";
  }
};

againButton.onclick = () => {
  document.querySelector("body").style.backgroundColor = "grey";
  score = 10;
  sayi = Math.floor(Math.random() * 20);
  kalanHak.innerHTML = `Remaining Tries:10`;
  yazilanSayi.innerHTML = "The Number You Have Entered Is:?";
  winLose.innerHTML = "";
  arttirAzalt.innerHTML = "MORE or LESS";
  bildinMi.innerHTML = `?`;
  console.log(sayi);
  gifNedir.src = "./img/calculating.gif";
};
