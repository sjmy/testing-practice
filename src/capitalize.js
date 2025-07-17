function capitalize(string) {
  let firstChar = string[0].toUpperCase();
  return `${firstChar}${string.slice(1)}`;
}

export { capitalize };
