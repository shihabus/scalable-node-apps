const http = require("http");
const cluster = require("cluster");

// no.of cups
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`====== This is a master process: ${process.pid} ======`);
  //   cluster.fork();
  //   cluster.fork();
  //   cluster.fork();

  // suppose if we have 12 cpus, it will create 1 master and 11 slaves
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  //   console.log(`This is a worker process: ${process.pid}`);
  http
    .createServer((req, res) => {
      const message = `Hi from worker @ ${process.pid}`;
      console.log(message);
      res.end(message);
    })
    .listen(3000);
}
