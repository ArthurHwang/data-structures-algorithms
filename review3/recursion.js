function countDown(num) {
  if (num <= 0) {
    console.log('ALL DONE');
    return;
  }
  console.log(num);
  countDown(num - 1);
}

countDown(5);

function sumRange(num) {
  debugger;
  if (num <= 1) {
    return 1;
  }

  return num + sumRange(num - 1);
}

console.log(sumRange(3));

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(3));
