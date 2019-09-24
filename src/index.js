function lastZeroInNum(num) {
  num = num.toString();
  let res = 0;
  for(let i = num.length - 1; i >= 0 && num[i] == '0'; i--, res++);
  return res;
}

function zerosCnt(arr) {

  let res = 0;

  let curVal = BigInt(1);

  for(let i = 0; i < arr.length; i++) {
    curVal *= BigInt(arr[i]);
  }

  return lastZeroInNum(curVal);
}

function packNumbers(arr, factStr) {

  factStr = factStr.split('');

  fact = parseInt(factStr.filter(number => number >= '0' && number <= '9').join(''));
  step = factStr.filter(val => val == '!').length;

  for(let num = fact; num >= 1; num -= step) {
    arr.push(num);
  }
}

module.exports = function zeros(expression) {
  arr = [];
  splitExpression = expression.split('*');

  for(let i = 0; i < splitExpression.length; i++) {
    packNumbers(arr, splitExpression[i]);
  }

  let res = zerosCnt(arr);
  return res;
}
