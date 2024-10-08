function solve() {
  const input = document.querySelector(`#text`).value.toLowerCase().trim().split(" ");
  const casingType = document.querySelector(`#naming-convention`).value;
  const output = document.querySelector(`#result`);

  let result = ``;

  if (input === `` || casingType === ``) {
    return;
  }

  if (casingType === `Camel Case`) {
    result = input[0] + input.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join("");
  } else if (casingType === `Pascal Case`) {
    result = input.map((word) => word[0].toUpperCase() + word.slice(1)).join("");
  } else {
    result = `Error!`;
  }

  output.textContent = result;
}