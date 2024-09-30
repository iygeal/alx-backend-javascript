process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);

  if (process.stdin.isTTY) {
    // If input is from terminal (interactive), exit immediately
    process.exit();
  }
});

// Listen for the 'exit' event, which will be triggered for piped input
process.on('exit', () => {
  // If the input is not interactive (piped), show the closing message
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
});
