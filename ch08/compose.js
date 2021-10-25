function compose(f, g) {
  return function (...args) {
    return f.call(this, g.apply(this, args));
  };
}
