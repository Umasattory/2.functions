// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = arr[0], avg = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  };
  
  avg = Number(sum / arr.length).toFixed(2);

  //min = Math.min(...arr);
  //max = Math.max(...arr);
  //max = Math.max.apply(null, arr);
  //min = Math.min.apply(null, arr);

  return { min: min, max: max, avg: avg };
}

// Задание 2

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++){
    let sumI = func(arrOfArr[i]);
    if (sumI > max) {
      max = sumI;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let differ = Math.abs(max - min);
  return differ;
}
