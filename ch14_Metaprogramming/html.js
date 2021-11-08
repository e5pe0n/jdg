function html(ss, ...vs) {
  const escaped = vs.map((v) =>
    String(v)
      .replace("&", "&amp;")
      .replace("<", "&lt;")
      .replace(">", "gt;")
      .replace('"', "&quot;")
      .replace("'", "&#39;")
  );
  let res = ss[0];
  for (let i = 0; i < escaped.length; ++i) {
    res += escaped[i] + ss[i + 1];
  }
  return res;
}

const op = "<";
console.log(html`<b>x ${op} y</b>`); // <b>x &lt; y</b>

const kind = "game";
const name = "D&D";
console.log(html`<div class="${kind}">${name}</div>`);
// <div class="game">D&amp;D</div>
