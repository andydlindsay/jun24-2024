// stdin (standard in) => terminal
// stdout (standard out) => terminal

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  console.log('you typed:', data);
});
