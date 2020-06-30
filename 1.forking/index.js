const { fork } = require("child_process");

// to fork the process
const processes = [
  // fork(module_path,arguments)
  fork("./app.js", [3000]),
  fork("./app.js", [3001]),
  fork("./app.js", [3002]),
];

console.log(`${process.length} instances started`);
