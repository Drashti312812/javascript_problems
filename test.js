x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
        console.log('arguments: ', arguments[i]);
      max = arguments[i];
    }
  }
  return max;
}

