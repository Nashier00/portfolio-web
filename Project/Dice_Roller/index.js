function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  let sum = document.getElementById("sum");
  let sumValue = 0;
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;

    values.push(value);
    sumValue += value;

    images.push(`<img src="images/Dice-${value}.png" alt="Dice ${value}">`);
    console.log(value);
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`;
  sum.textContent = `Sum: ${sumValue}`;
  diceImages.innerHTML = images.join("");
  console.log(diceImages);
}
