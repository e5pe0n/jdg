{
  const o = {
    m: function () {
      const self = this;

      function f() {
        console.log("this === o in f:", this === o);
        console.log("self === o in f:", self === o);
      }

      const g = () => {
        console.log("this === o in g:", this === o);
      };

      console.log("this === o in m:", this === o);
      f();
      g();
    },
  };
  o.m();
}
