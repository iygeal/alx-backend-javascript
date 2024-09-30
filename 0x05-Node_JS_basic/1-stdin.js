// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen to input from stdin
process.stdin.on('data', (data) => {
  // Convert the input to a string and trim it to remove
  /// any extra spaces or new lines
  const name = data.toString().trim();

  // Display the name
  console.log(`Your name is: ${name}`);

  // Gracefully close the process with a cutom message
  console.log('This important software is now closing');

  // Exit the process
  process.exit();
});
