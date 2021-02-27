// super simple
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    let shift = a.shift();
    a.push(shift);
  }

  return a;
}

//  over complicated crap
function rotLeft(a, d) {
  let tempArray = [];

  for (let i = 0; i < d; i++) {
    tempArray = [];
    for (let j = 0; j < a.length; j++) {
      if (j === 0) {
        tempArray[a.length] = a[j];
      } else {
        tempArray[j - 1] = a[j];
      }
    }
    a = tempArray;
  }

  let result = a.filter((word) => word != undefined);

  return result;
}
