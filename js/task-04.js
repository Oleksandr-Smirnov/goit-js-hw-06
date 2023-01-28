let counterValue = 0;

const clickMinus = document.querySelector('button[data-action = "decrement"]');
const clickPlus = document.querySelector('button[data-action = "increment"]');

let counter = document.querySelector("#value");

clickMinus.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
clickPlus.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
