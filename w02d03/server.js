// server
const net = require('net');

const server = net.createServer(); // creates a TCP server
const port = 48956;

// create a place to store all of our connections
const connections = [];

// listen for incoming connections
server.on('connection', (connection) => {
  console.log('someone connected to the server');

  // add this connection to the connections array
  connections.push(connection);
  console.log(connections.length);

  // send a welcome message to the client
  connection.write('welcome to the server'); // sends a message over the TCP connection

  // set the default encoding on the connection object
  connection.setEncoding('utf-8');

  // listen for incoming messages over the connection
  connection.on('data', (data) => {
    console.log('client says:', data);

    // loop through the array of connected clients
    for (const conn of connections) {
      // check if the conn is NOT the client who sent the message
      if (conn !== connection) {
        // echo the data received out to the client
        conn.write(data);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
}); // starts the server on the specified port
