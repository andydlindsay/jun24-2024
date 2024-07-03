const net = require('net');

const config = {
  host: 'localhost',
  port: 48956
};

const connection = net.createConnection(config); // creates a TCP connection

// set the default encoding on the connection object
connection.setEncoding('utf-8');

// data coming in over the connection is an event
connection.on('data', (data) => {
  console.log('server says:', data);
});

connection.on('close', () => {
  process.exit();
});

// set the default encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for the user to type something in
process.stdin.on('data', (data) => {
  connection.write(data);
});
