let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerHTML;

    if (buttonText === "=") {
      try {
        string = String(eval(input.value));
        input.value = string;
      } catch (error) {
        input.value = "Error";
      }
    } else if (buttonText === "AC") {
      string = "";
      input.value = string;
    } else if (buttonText === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      const lastCharIsOperator = /[+\-*/]$/.test(string);

      if (lastCharIsOperator && /[+\-*/]/.test(buttonText)) {
        string = string.slice(0, -1) + buttonText;
      } else {
        string += buttonText;
      }

      input.value = string;
    }
  });
});
