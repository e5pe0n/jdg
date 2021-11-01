const now = new Date();

const epoch = new Date(0); // given interger is interpreted as milliseconds from epoch
console.log(epoch); // 1970-01-01T00:00:00.000Z

const century = new Date(
  2100, // year
  0, // January
  1, // 1st
  2, // hour
  3, // minute
  4, // second
  5 // millisecond
);
console.log(century); // 2100-01-01T02:03:04.005Z

console.log(`day of month: ${century.getDate()}`); // day of month: 1
console.log(`day of week: ${century.getDay()}`); // day of week: 5; Saturday

const utcCentury = new Date(Date.UTC(2100, 0, 1));
console.log(utcCentury.toUTCString()); // Fri, 01 Jan 2100 00:00:00 GMT

utcCentury.setFullYear(utcCentury.getFullYear() + 1);
utcCentury.setUTCFullYear(utcCentury.getUTCFullYear() + 1);

console.log(`timestamp [ms]: ${century.getTime()}`); // timestamp [ms]: 4102452184005

start = Date.now();
// something do
end = Date.now();
const duration_ms = end - start;
