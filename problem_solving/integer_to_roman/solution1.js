const ROMAN_ONE = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};

const ROMAN_TEN = {
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
};

const R0MAN_HUNDRED = {
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
};

const ROMAN_THOUSAND = "M";

function convertNumToArr(num) {
  const maxDigit = 4;
  const currNumDigit = String(num).length;
  const digitDiff = maxDigit - currNumDigit;
  const arrNum = String(num)
    .split("")
    .map((n) => Number(n));

  // it is not a 4 digit number, cast it into arr by prepending 0 in front
  // eg: 32 => [0,0,3,2]
  if (digitDiff > 0) {
    const front = new Array(digitDiff).fill(0);
    const back = arrNum;
    return [...front, ...back];
  }

  // it is 4 digits number, cast it into arr,
  // eg: 2993 => [2,9,9,3]
  return arrNum;
}

function addPlaces(numArr) {
  // [2,3,4,1] => [2000, 300, 40, 1]
  // [0,1,2,1] => [0, 100, 20, 1]
  for (let i = 0, j = 1000; i < numArr.length; i++) {
    numArr[i] = j * numArr[i];
    j = j / 10;
  }
  return numArr;
}

function convertNumberToRoman(num) {
  const numArr = convertNumToArr(num);
  const numArrByPlaces = addPlaces(numArr);

  let i = 0;
  let generatedRoman = "";

  while (i < numArrByPlaces.length) {
    const curr = numArrByPlaces[i];

    switch (i) {
      // thousand
      // special handler for index 0
      // eg: [4000, 300, 20, 1]; 4 * M = MMMM
      case 0:
        generatedRoman += new Array(curr / 1000).fill(ROMAN_THOUSAND).join("");
        break;

      // hundred
      // lookup table for hundred;
      // eg: [0, 400, 40, 4]; 400 = CD
      case 1:
        generatedRoman += R0MAN_HUNDRED[curr] || "";
        break;

      // tens
      // lookup table for tens;
      // eg: [0, 400, 40, 4]; 40 = XL
      case 2:
        generatedRoman += ROMAN_TEN[curr] || "";
        break;

      // ones
      // lookup table for ones;
      // eg: [0, 400, 40, 4]; 4 = IV
      case 3:
        generatedRoman += ROMAN_ONE[curr] || "";
        break;

      default:
        break;
    }

    i++;
  }

  return generatedRoman;
}

console.log(convertNumberToRoman(3));
console.log(convertNumberToRoman(23));
console.log(convertNumberToRoman(20));
console.log(convertNumberToRoman(103));
console.log(convertNumberToRoman(243));
console.log(convertNumberToRoman(1002));
console.log(convertNumberToRoman(4821));
console.log(convertNumberToRoman(4045));
