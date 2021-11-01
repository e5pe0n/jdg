const urlPattern = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
const text = "Visit my blog at http://www.example.com/~david";
const m = text.match(urlPattern);
console.log(m[0]); // http://www.example.com/~david
console.log(m[1]); // http
console.log(m[2]); // www.example.com
console.log(m[3]); // ~david
console.log(m.input); // Visit my blog at http://www.example.com/~david
console.log(m.index); // 17
console.log(m.groups.protocol); // http
console.log(m.groups.host); // www.example.com
console.log(m.groups.path); // ~david
