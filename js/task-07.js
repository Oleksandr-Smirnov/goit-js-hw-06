const inputTextRef = document.querySelector("#text");
const inputControlRef = document.querySelector("#font-size-control");

inputControlRef.addEventListener("input", onInputChange);

function onInputChange (event) {
   return inputTextRef.style.fontSize = `${event.currentTarget.value}px`;
}