function promiseSequence(input, promiseMaker) {
  inputs = [...inputs];

  function handleNextInput(outputs) {
    if (inputs.length === 0) {
      return outputs;
    } else {
      const nextInput = inputs.shift();
      return promiseMaker(nextInput)
        .then((output) => outputs.concat(output))
        .then(handleNextInput);
    }
  }
  return Promise.resolve([]).then(handleNextInput);
}

function fetchBody(url) {
  return fetch(url).then((r) => r.text());
}

promiseSequence(urls, fetchBody)
  .then((bodies) => {
    /* do something */
  })
  .catch(console.error);
