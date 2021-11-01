const urlPattern = /(\w+):\/\/([\w.]+)\/(\S*)/;
const text = "Visit my blog at http://www.example.com/~david";
const m = text.match(urlPattern);
let fullurl, protocol, host, path;
if (m !== null) {
  [fullurl, protocol, host, path] = m;
}
console.log(`fullurl=${fullurl}`);
console.log(`protocol=${protocol}`);
console.log(`host=${host}`);
console.log(`path=${path}`);

// fullurl=http://www.example.com/~david
// protocol=http
// host=www.example.com
// path=~david
