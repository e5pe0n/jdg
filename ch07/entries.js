const letters = [..."Hello world"];
let everyother = "";
for (const [index, letter] of letters.entries()) {
  if (index % 2 === 0) {
    everyother += letter;
  }
}
console.log(everyother); // Hlowrd
