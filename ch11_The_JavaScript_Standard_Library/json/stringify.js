const address = {
  city: "Sapporo",
  prefecture: "Hokkaido",
  country: "Japan",
  zip: "000-0000",
  id: 0,
};

const text = JSON.stringify(address, ["country", "zip", "city"]);
console.log(text); // {"country":"Japan","zip":"000-0000","city":"Sapporo"}

const json = JSON.stringify(address, (k, v) =>
  typeof v === "string" ? undefined : v
);
console.log(json); // {"id":0}
