import { x } from "./x";

document.querySelector("h1").addEventListener("click", () => {
  console.log(x(1));
  const valueFromUser = Number(prompt("Enter number", 3));
  alert(x(valueFromUser));

  console.log(x(2));
});
