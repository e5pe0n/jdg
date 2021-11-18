const b = Buffer.from([0x41, 0x42, 0x43]);
console.log(b.toString()); // ABC; default "utf8"
console.log(b.toString("hex")); // 414243
console.log();

const computer = Buffer.from("IBM3111", "ascii");
for (let i = 0; i < computer.length; ++i) {
  --computer[i];
}
console.log(computer.toString("ascii")); // HAL2000
console.log(
  computer
    .subarray(0, 3)
    .map((x) => x + 1)
    .toString()
); // IBM
console.log();

const zeros = Buffer.alloc(1024);
const ones = Buffer.alloc(128, 1);
const dead = Buffer.alloc(1024, "DEADBEEF", "hex");

console.log(dead.readUInt32BE(0));
console.log(dead.readUInt32BE(1));
console.log(dead.readBigUInt64BE(6));
console.log(dead.readUInt32LE(1020));
