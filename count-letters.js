function removeSpace(input) {
  return input.replace(/\s/g, '');
}

function countLetters(input) {
  const letterStats = {}
  const noSpaces = removeSpace(input);

  for (const letters of noSpaces) {
    if (!Object.keys(letterStats).includes(letters)) {
      letterStats[letters] = 1;
    } else {
      letterStats[letters] += 1
    }
  }
  return letterStats
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(countLetters('lighthouse in the house'));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");