const s = "JAVASCRIPT\tjavaSCRIPT\nJAVAscript";
const t = s.replace(/javascript/gi, "JavaScript");
console.log(t);
// JavaScript      JavaScript
// JavaScript

const quote = /"([^"]*)"/g;
const text = 'He said "stop"';
const res = text.replace(quote, "!!$1!!");
console.log(res); // He said !!stop!!

const quote2 = /"(?<quotedText>[^"]*)"/g;
const res2 = text.replace(quote2, "!!$<quotedText>!!");
console.log(res2); // He said !!stop!!

const d = "15 times 15 is 225";
console.log(d.replace(/\d+/gu, (n) => parseInt(n).toString(16)));
// f times f is e1
