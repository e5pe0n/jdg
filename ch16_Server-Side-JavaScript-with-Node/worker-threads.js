const threads = require("worker_threads");

if (threads.isMainThread) {
  module.exports = function reticulateSplines(splines) {
    return new Promise((resolve, reject) => {
      const reticulator = new threads.Worker(__filename);
      reticulator.postMessage(splines);
      reticulator.on("message", resolve);
      reticluator.on("error", reject);
    });
  };
} else {
  threads.parentPort.once("message", (splines) => {
    for (const spline of splines) {
      spline.reticulate ? spline.reticulate() : (spline.reticulated = true);
    }
    threads.parentPort.postMessage(splines);
  });
}
