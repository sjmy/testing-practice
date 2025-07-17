function isUpperCase(char) {
  return char === char.toUpperCase();
}

function caeserCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string[i].toLowerCase())) {
      let newIndex = alphabet.indexOf(string[i].toLowerCase()) + shift;

      if (newIndex > 25) {
        newIndex -= 26;
      } else if (newIndex < 1) {
        newIndex += 26;
      }

      if (isUpperCase(string[i])) {
        result += alphabet[newIndex].toUpperCase();
        continue;
      } else {
        result += alphabet[newIndex];
        continue;
      }
    }
    result += string[i];
  }

  return result;
}

export { caeserCipher };
