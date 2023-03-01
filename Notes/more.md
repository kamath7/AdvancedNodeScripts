Node.js is single-threaded in the sense that it runs JavaScript code on a single thread, called the "event loop" thread. The event loop is responsible for processing I/O operations, timers, and callbacks, as well as managing the event-driven nature of Node.js.

However, Node.js uses a feature of the libuv library called the "thread pool" to handle certain tasks that may block the event loop. The thread pool is a pool of worker threads that can execute JavaScript code outside of the event loop thread. This allows Node.js to perform I/O operations and other tasks that may take a long time to complete, without blocking the event loop.

Some examples of tasks that may use the thread pool include file system operations, DNS resolution, and cryptographic operations. When one of these tasks is executed, libuv will schedule it to run on a worker thread from the thread pool. Once the task is completed, the result is passed back to the event loop thread, which can then continue executing JavaScript code.

It's important to note that the thread pool is used only for specific types of tasks that are known to potentially block the event loop. Most of the time, Node.js runs entirely on the event loop thread, making it single-threaded in practice.


### LibUV


Libuv is a low-level library that provides cross-platform asynchronous I/O capabilities, timers, and other event-driven primitives for building network and file system applications. It is the underlying library that provides the asynchronous I/O capabilities for Node.js.

Libuv can be used in a variety of applications that require asynchronous I/O and event-driven programming, such as web servers, chat servers, database drivers, and file system utilities. It is particularly useful for building high-performance, scalable network applications that need to handle a large number of concurrent connections.

One example of a popular application that uses libuv is the Node.js runtime itself. Node.js uses libuv to provide its non-blocking I/O capabilities, as well as its event-driven programming model. By using libuv, Node.js can handle a large number of concurrent connections without blocking, making it a popular choice for building real-time applications and scalable network services.

While libuv can be used in a wide range of applications, it is a low-level library that requires a good understanding of asynchronous programming and event-driven programming concepts. It is typically used by experienced developers who are comfortable working with low-level APIs and want to build high-performance, scalable applications. If you are new to asynchronous programming or event-driven programming, it may be more appropriate to start with a higher-level framework or library, such as Node.js or a web framework like Express, and gradually work your way down to using lower-level libraries like libuv.


### LibUV delegation

OS makes the actual request in the https.request. Libuv delegates it to OS. 

When you make an https.request in Node.js, the request is sent over the network using the HTTPS protocol, which is built on top of the TCP protocol. Libuv provides the underlying network I/O capabilities for Node.js, and is used to establish the connection to the remote server and send and receive data.

When you make an https.request, Node.js first resolves the domain name using the DNS resolver in libuv. This involves making a DNS query to resolve the IP address of the remote server. Once the IP address is known, Node.js establishes a TCP connection to the remote server using the socket API provided by libuv.

Once the TCP connection is established, Node.js sends the HTTPS request over the socket using the HTTPS protocol. The HTTPS protocol is built on top of the TCP protocol and provides encryption and authentication for the communication.

As data is sent and received over the network, libuv uses a combination of non-blocking I/O and event-driven programming to manage the I/O operations. This allows Node.js to handle multiple requests and responses in parallel, without blocking on I/O operations. Libuv uses a combination of non-blocking I/O and event-driven programming to manage the I/O operations, including the use of a thread pool for some types of I/O operations that can block the event loop.

Once the response is received from the remote server, Node.js processes the response and returns the result to the calling code. If there are multiple requests and responses being handled at the same time, Node.js uses the event loop and libuv to manage the concurrency and ensure that each request is handled in a timely and efficient manner.


### Improving performance

- Using node in Cluster node
- Using worker threads


#### Cluster Mgr

In Node.js, a cluster manager is a module that allows a Node.js application to utilize multiple CPU cores effectively. By using a cluster manager, you can create multiple worker processes for a Node.js application and distribute the incoming requests among them. This can improve the performance and scalability of the application.

The cluster module in Node.js provides a built-in cluster manager that allows you to create a cluster of Node.js processes. The cluster module creates a master process that forks child worker processes to handle incoming requests. The master process distributes incoming requests among the worker processes and monitors their health.
cluster module is used to create a master process that forks worker processes for each CPU core available. Each worker process creates an HTTP server that listens on port 8000. Incoming requests are distributed among the worker processes by the master process.

The cluster module also provides other features, such as the ability to send messages between the master and worker processes, and the ability to gracefully restart worker processes without interrupting the service. By using a cluster manager, you can create highly scalable and robust Node.js applications.

#### Apache benchmark (ab)

pacheBench (ab) is a command-line tool for benchmarking HTTP servers. It allows you to send a specified number of requests to a server and measure the response time and other statistics. Here's an example code snippet:

ab -n 1000 -c 10 http://example.com/
This command will send 1000 requests to http://example.com/ with a concurrency of 10, meaning that 10 requests will be sent at a time until all 1000 have been sent. The output will include statistics such as the mean time per request, the total number of requests, and the percentage of requests that were successful.