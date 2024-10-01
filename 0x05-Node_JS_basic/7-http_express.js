// Import necessary modules
const express = require('express');
const { readFile } = require('fs');

// Initialize the Express app
const app = express();
const port = 1245;

// Function to count students from a CSV file
function countStudents(fileName) {
  // Objects to store student names and fields (e.g., CS, SWE)
  const students = {};
  const fields = {};
  let length = 0;

  // Return a promise to handle asynchronous file reading
  return new Promise((resolve, reject) => {
    // Read the CSV file
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err); // Reject if there's an error reading the file
      } else {
        let output = '';
        const lines = data.toString().split('\n'); // Split the file into lines

        // Loop over each line (student record)
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            // Ensure the line is not empty
            length += 1; // Increment the student count

            // Split the line into fields (first name, last name, etc.)
            const field = lines[i].toString().split(',');

            // Add student names by their field (e.g., CS, SWE)
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            // Count the number of students in each field
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        // Adjust for the header line, which is not a student record
        const l = length - 1;
        output += `Number of students: ${l}\n`;

        // Add the number of students per field (e.g., CS, SWE)
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            // Ignore the header field
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        // Resolve the promise with the formatted output
        resolve(output);
      }
    });
  });
}

// Route to display the home message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route to display the list of students
app.get('/students', (req, res) => {
  // Read the database file (from command-line args)
  countStudents(process.argv[2].toString())
    .then((output) => {
      // Send a combined message with a header and the student data
      res.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      // Send error message if the file could not be loaded
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Start the server and listen on port 1245
app.listen(port, () => {});

// Export the Express app
module.exports = app;
