const inputTextRef = document.querySelector("#text");
const inputControlRef = document.querySelector("#font-size-control");
inputControlRef.oninput = function () {
      inputTextRef.style.fontSize = inputControlRef.value + 'px';
}