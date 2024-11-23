const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

const calculate = (operator) => {
  const num1Val = parseFloat(num1.value);
  const num2Val = parseFloat(num2.value);

  let output;

  switch (operator) {
    case "+":
      output = num1Val + num2Val;
      break;
    case "-":
      output = num1Val - num2Val;
      break;
    case "*":
      output = num1Val * num2Val;
      break;
    case "/":
      if (num2Val === 0) {
        break;
      }
      output = num1Val / num2Val;
      break;
    default:
      console.log("Invalid operator!");
  }

  result.textContent = "Result: " + output;
};
