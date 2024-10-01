const http = require('http'); // Import the HTTP module
const { readFile } = require('fs'); // Import the readFile function from the fs module

const hostname = '127.0.0.1'; // Server will run on localhost
const port = 1245; // Server will listen on port 1245

/**
 * countStudents function:
 * Reads the CSV file, counts the number of students in each field,
 * and returns the result as a string in a Promise.
 */
function countStudents(fileName) {
  const students = {}; // Store students by field
  const fields = {}; // Store count of students per field
  let length = 0; // Total number of students

  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      // Asynchronously read the file
      if (err) {
        reject(err); // Reject promise if error occurs (e.g., file not found)
      } else {
        let output = '';
        const lines = data.toString().split('\n'); // Split file into lines

        // Process each line (skip empty lines)
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(','); // Split each line by commas

            // Group students by field of study
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            // Count number of students per field
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        // Generate output string with total students and field breakdown
        const l = length - 1; // Subtract 1 for header line
        output += `Number of students: ${l}\n`;

        // Output student details by field
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output); // Resolve the promise with the formatted output
      }
    });
  });
}

// Create HTTP server
const app = http.createServer((request, response) => {
  response.statusCode = 200; // Set status code to 200 (OK)
  response.setHeader('Content-Type', 'text/plain'); // Set response type to plain text

  // If the root URL is requested, respond with "Hello Holberton School!"
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end(); // End the response
  }

  // If the /students URL is requested, return student list
  if (request.url === '/students') {
    response.write('This is the list of our students\n');

    // Call countStudents to process the student file
    countStudents(process.argv[2].toString()) // Pass file path from command line arguments
      .then((output) => {
        const outString = output.slice(0, -1); // Remove last newline
        response.end(outString); // Send the formatted student list
      })
      .catch(() => {
        response.statusCode = 404; // Set status code to 404 if file not found
        response.end('Cannot load the database'); // Send error message
      });
  }
});

// Listen on port 1245
app.listen(port, hostname, () => {
  // Server running on localhost:1245
});

// Export app for use in other files
module.exports = app;
