const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");
console.log(span.textContent);

input.addEventListener("input", onSpanChange);

function onSpanChange(event) {
  if (event.currentTarget.value === "") {
    span.textContent = "Anonymus";
  } else {
    span.innerHTML = event.currentTarget.value;
  }
}