const stats = require("./stats2");
console.log(stats.mean([1, 2, 3, 4, 5])); // 3

const { stddev } = require("./stats2");
console.log(stddev([1, 2, 3, 4, 5])); // 1.5811388300841898
