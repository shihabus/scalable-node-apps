## Forking

Suppose you are running a coffee shop. If you serve using a single counter, it will be hard to manage a lot of people. When there are more customers coming simultaneously, they end up creating longer queues. So in oder to serve, many people at the same time, you can open multiple coffee counters. This is what **x-scaling**
of apps means.

Rather than running a single instance of an app, you run multiple instances to server higher demand. The process of creating a new instance out of an app is called **spawning/forking**. In case of a node server, we will have a single instance of the server running on a port. If that instance goes down, no one can access it. When the load is more, we end up creating queues. In order to avoid this, we can **fork** the app so that it can be run on multiple ports as separate instances.

## Cluster

Since node is single threaded, we can create **clusters**. Clusters include a _main process_ which controls the _workers processes_. This is similar something to a master slave pattern.

Clusters can help us attaining _Zero Downtime_. With multiple instances running, even if one instance goes down, the request can still be served from the remaining instances. We can watch for the instances going down and can restart/fork new onces. If we are to deploy/update something, it can happen instance wise, thus avoiding entire service going down.

## [pm2](https://pm2.keymetrics.io/)

pm2 is used for daemon process management. It support cluster mode out of the box.
