const trace = (o, m) => {
  const original = o[m];
  o[m] = function (...args) {
    console.log(new Date(), "Entering:", m);
    const result = original.apply(this, args);
    console.log(new Date(), "Exiting:", m);
    return result;
  };
};

const o = {
  sum: function (start, end) {
    let s = 0;
    for (let i = start; i < end; i++) {
      s += i;
    }
    return s;
  },
};

trace(o, "sum", 3, 7);
console.log(o["sum"](3, 7));
// 2021-10-24T13:28:43.769Z Entering: sum
// 2021-10-24T13:28:43.773Z Exiting: sum
// 18
