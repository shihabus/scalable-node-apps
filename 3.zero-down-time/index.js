const http = require("http");
const cluster = require("cluster");

// no.of cups
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`====== This is a master process: ${process.pid} ======`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // to listen for instance going down
  cluster.on("exit", (worker) => {
    // console.log("The died worker", worker);
    console.log(
      `Remaining worker count ${Object.keys(cluster.workers).length}`
    );
    // ZERO DOWNTIME: when a worker is killed, create a new worker
    cluster.fork();
    console.log(
      `Remaining worker count ${Object.keys(cluster.workers).length}`
    );
  });
} else {
  console.log(`Worker started @ ${process.pid}`);
  http
    .createServer((req, res) => {
      const message = `Served by worker @ ${process.pid}`;
      res.end(message);
      if (req.url == "/kill") {
        // kill process
        process.exit();
      } else if (req.url === "/") {
        console.log(message);
      }
    })
    .listen(3000);
}
