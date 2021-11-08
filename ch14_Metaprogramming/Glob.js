class Glob {
  constructor(glob) {
    this.glob = glob;
    const regexpText = glob.replace("?", "([^/])").replace("*", "([^/]*)");
    this.regexp = new RegExp(`^${regexpText}`, "u");
  }
  toString() {
    return this.glob;
  }
  [Symbol.search](s) {
    return s.search(this.regexp);
  }
  [Symbol.match](s) {
    return s.match(this.regexp);
  }
  [Symbol.replace](s, replacement) {
    return s.replace(this.regexp, replacement);
  }
}

module.exports = { Glob };
