const url = new URL("https://example.com");
url.pathname = "path with spaces";
url.search = "q=foo#bar";
console.log(url.pathname); // /path%20with%20spaces
console.log(url.search); // ?q=foo%23bar
console.log(url.href); // https://example.com/path%20with%20spaces?q=foo%23bar
