const os = require('os');

console.log("Platform: ", os.platform());
console.log("CPU Architecture: ", os.arch());
console.log("Total Memory: ", os.totalmem());
console.log("Free Memory: ", os.freemem());