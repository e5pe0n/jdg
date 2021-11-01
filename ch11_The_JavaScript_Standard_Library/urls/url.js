const url = new URL("https://example.com:8000/path/name?q=term#fragment");

console.log(url.href); // https://example.com:8000/path/name?q=term#fragment
console.log(url.origin); // https://example.com:8000
console.log(url.protocol); // https:
console.log(url.host); // example.com:8000
console.log(url.hostname); // example.com
console.log(url.port); // 8000
console.log(url.pathname); // /path/name
console.log(url.search); // ?q=term
console.log(url.hash); // #fragment
