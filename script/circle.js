const texts = document.querySelectorAll(".slider__circle-paragraph");

for (let text of texts) {
  text.innerHTML = text.innerText.split("").map((letter, i) =>
    `<span style="transform: rotate(${i * 8.2}deg")>${letter}</span>`
  ).join("");
}