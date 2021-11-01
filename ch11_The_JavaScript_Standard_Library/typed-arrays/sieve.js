function sieve(n) {
  const a = new Uint8Array(n + 1);
  const max = Math.floor(Math.sqrt(n));
  const p = 2;
  while (p <= max) {
    for (let i = 2 * p; i <= n; i += p) {
      a[i] = 1;
    }
    while (a[++p]);
  }
  while (a[n]) {
    n--;
  }
  return n;
}
