function zerosCnt(num, type) {
  if(type == 2 && num % 2 != 0) {
    return 0;
  }

  res = 0;

  while(num > 0) {
    num /= 5;
    num = parseInt(num);
    res += num;
  }
  
  return res;
}

module.exports = function zeros(expression) {
  //states
  let NUMBER = 0;
  let FACT = 0;
  
  let state = NUMBER;
  let numBuff = '';
  let factCount = 0;
  let res = 0;

  for(let i = 0; i < expression.length; i++) {
    if(state == NUMBER && expression[i] != '*') {
      if(expression[i] >= '0' && expression[i] <= '9') {
        numBuff += expression[i];
      } else {
        state = FACT;
        factCount = 1;
      }
    } else if(state == FACT) {
      if(expression[i] == '!') {
        factCount += 1;
      } else {
        if(zerosCnt(parseInt(numBuff), factCount) > 0) {
          res += zerosCnt(parseInt(numBuff), factCount);
        } else {
          //return 0;
        }

        numBuff = '';
        factCount = 0;
        state = NUMBER;
      }
    }
  }

  
  console.log(res);

  if(parseInt(numBuff) > 0) {
    res += zerosCnt(parseInt(numBuff), factCount);
  }

  return res;
}
