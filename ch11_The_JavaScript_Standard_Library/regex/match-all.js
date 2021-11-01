const wordsPattern = /\b\p{Alphabetic}+\b/gu;
const text = "This is a naïve test of the matchAll() method.";
for (const w of text.matchAll(wordsPattern)) {
  console.log(`${w.index}: ${w[0]}`);
}

// 0: This
// 5: is
// 8: a
// 10: naïve
// 16: test
// 21: of
// 24: the
// 28: matchAll
// 39: method
