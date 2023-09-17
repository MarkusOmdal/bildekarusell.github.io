// Henter elementer
let hovedbildeEL = document.querySelector(".hovedbilde");
let sidebildeEl = document.querySelector(".sidebilde");
let høyreEl = document.querySelector(".høyre");
let venstreEl = document.querySelector(".venstre");
let bunnKnapperEl = document.querySelectorAll(".bunnknapp");

let bilder = [
  "url('./img/Ferrari499p.jpg')",
  "url('./img/Porsche963.jpg')",
  "url('./img/Toyota.jpg')",
  "url('./img/Lemans.webp')",
];

let img = 0;

// Legger til lyttere
høyreEl.addEventListener("click", blaTilHøyre);
venstreEl.addEventListener("click", blaTilVenstre);

for (let i = 0; i < bunnKnapperEl.length; i += 1) {
  bunnKnapperEl[i].addEventListener("click", blaTilBilde);
  bunnKnapperEl[i].id = i;
}

oppdaterBilde();

function blaTilHøyre() {
  img += 1;
  if (img >= bilder.length) {
    img = 0;
  }
  oppdaterBilde();
}
function blaTilVenstre() {
  img -= 1;
  if (img < 0) {
    img = bilder.length - 1;
  }
  oppdaterBilde();
}

function blaTilBilde(e) {
  img = Number(e.target.id);
  oppdaterBilde();
}

function oppdaterBilde() {
  hovedbildeEL.style.backgroundImage = bilder[img];
  for (let i = 0; i < bunnKnapperEl.length; i += 1) {
    bunnKnapperEl[i].style.backgroundColor = "white";
  }
  bunnKnapperEl[img].style.backgroundColor = "red";
  console.log(img);
}
