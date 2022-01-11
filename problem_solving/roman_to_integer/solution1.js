const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function convertRomanToInteger(rom) {
  let i = 0;
  let sum = 0;

  while (i < rom.length) {
    const curr = rom[i];
    const next = rom[i + 1];

    // if the next value is greater than current value
    if (curr && next && map[next] > map[curr]) {
      sum += map[next] - map[curr];
      i += 2;
    } else {
      sum += map[curr];
      i++;
    }
  }

  return sum;
}

console.log(convertRomanToInteger("VIII"));
console.log(convertRomanToInteger("LXXIV"));
console.log(convertRomanToInteger("C"));
console.log(convertRomanToInteger("CI"));
console.log(convertRomanToInteger("CXXIII"));
console.log(convertRomanToInteger("MIV"));
console.log(convertRomanToInteger("MMMMDCCCXXI"));
console.log(convertRomanToInteger("MMMMXLV"));
console.log(convertRomanToInteger("MMMMMC"));
console.log(convertRomanToInteger("MMMMMMMMMCMXCIX"));
