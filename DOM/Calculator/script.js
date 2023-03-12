let string = "";
let input = document.querySelector("input");
let result = document.querySelector("#equal");
let del = document.querySelector(".del");
let clear = document.querySelector("#clear");
input.value = "";

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //*Change input value on display when a button is clicked.
    input.value += e.target.innerText;
  });
});

clear.addEventListener("click", () => {
  input.value = "";
});

del.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

result.addEventListener("click", () => {
  input.value = eval(input.value);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") result.click();
});
