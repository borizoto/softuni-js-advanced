function solve() {
  const input = document.querySelector(`#input`);
  const outputRef = document.querySelector(`#output`);
  const sentencesArr = input.value.split(".").filter(element => element.length > 0);
  const sentencesArrCopy = sentencesArr.slice();
 
  const paragraphsCount = Math.ceil(sentencesArr.length / 3);
 
  if (input.value === "") {
    return;
  }
 
  for (let i = 0; i < paragraphsCount; i++) {
    const text = sentencesArrCopy.splice(0, 3).join(".").trim() + ".";
    const p = document.createElement("p");
    p.textContent = text;
    outputRef.appendChild(p);
  }
}