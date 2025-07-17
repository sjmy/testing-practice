function average(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

function analyzeArray(array) {
  let arrayStats = {
    average: average(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return arrayStats;
}

export { analyzeArray };
