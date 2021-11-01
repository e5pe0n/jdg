const data = JSON.parse(text, (k, v) => {
  if (key[0] === "_") return undefined;
  if (
    typeof v === "string" &&
    /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)
  ) {
    return new Date(v);
  }
});
