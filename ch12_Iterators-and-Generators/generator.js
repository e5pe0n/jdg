function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

const primesGenerator = oneDigitPrimes();

console.log(primesGenerator.next().value); // 2
console.log(primesGenerator.next().value); // 3
console.log(primesGenerator.next().value); // 5
console.log(primesGenerator.next().value); // 7
console.log(primesGenerator.next().done); // true

const primes = [...oneDigitPrimes()];
console.log(primes); // [ 2, 3, 5, 7 ]

let sum = 0;
for (const prime of oneDigitPrimes()) {
  sum += prime;
}
console.log(sum); // 17
