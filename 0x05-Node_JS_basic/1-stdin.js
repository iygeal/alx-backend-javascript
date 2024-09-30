// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for input
process.stdin.on('data', (data) => {
  // Convert input to string and trim extra spaces or newlines
  const name = data.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // If the input is interactive (entered from the terminal)
  if (process.stdin.isTTY) {
    // End the process
    process.exit();
  }
});

// If the input is piped (non-interactive), listen for the 'end' event
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

// Keep the input stream open for interactive use
process.stdin.resume();
