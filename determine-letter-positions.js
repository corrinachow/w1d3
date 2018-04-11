function countLetters(input) {
  const letterStats = {}

  for (i = 0; i < input.length; i++) {
    if (!Object.keys(letterStats).includes(input[i]) && input[i] !== ' ') {
      letterStats[input[i]] = [];
      letterStats[input[i]].push(i);
    } else if (input[i] !== ' ') {
      letterStats[input[i]].push(i)
    }
  }
  return letterStats
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(countLetters('lighthouse in the house'));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");