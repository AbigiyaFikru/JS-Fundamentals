const args = process.argv.slice(2);

const first = args[0];
const second = args[1];

console.log((first === undefined ? "undefined" : first) + " is " + (second === undefined ? "undefined" : second));
