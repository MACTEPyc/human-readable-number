const strNum = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four', 
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve', 
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty', 
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
};

module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }
  const { floor } = Math;
  let result = '';
  let num = number;
  let numHundreds = floor(num / 100);
  if (numHundreds !== 0) {
    result = `${strNum[numHundreds]} ${strNum[100]}`;
    num %= 100;
  }
  let numDoxens = floor(num / 10)
  if (numDoxens !== 0) {
    if (num > 0 && num < 20) {
      result += (result ? ' ' : '') + strNum[num];
      num = 0;
    } else {
      result += (result ? ' ' : '') + strNum[numDoxens * 10];
      num %= 10;
    }
  }
  if (num) {
    result += (result ? ' ' : '') + strNum[num];
  } 
  return result;
}
