{
  const o = {
    m: function () {
      const self = this;
      console.log("this === o in m:", this === o); // true

      function f() {
        console.log("this === o in f:", this === o); // false
        console.log("self === o in f:", self === o); // true
      }

      const g = () => {
        console.log("this === o in g:", this === o); // true
      };

      f();
      g();
    },
  };
  o.m();
}
