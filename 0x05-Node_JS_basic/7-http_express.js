// Import the required modules
const express = require('express');
const fs = require('fs').promises;

// Create an instance of an Express application
const app = express();

// Function to read and parse the student data from the CSV file asynchronously
function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8')
      .then((data) => {
        let output = '';
        const students = {};
        const fields = {};
        const lines = data.split('\n').filter((line) => line.trim().length > 0);

        if (lines.length > 0) {
          const totalStudents = lines.length - 1; // Exclude the header
          output += `Number of students: ${totalStudents}\n`;

          lines.forEach((line) => {
            const [firstname, , , field] = line.split(',');

            if (field) {
              if (!students[field]) students[field] = [];
              students[field].push(firstname);

              if (!fields[field]) fields[field] = 0;
              fields[field] += 1;
            }
          });

          for (const [field, count] of Object.entries(fields)) {
            output += `Number of students in ${field}: ${count}. List: ${students[
              field
            ].join(', ')}\n`;
          }

          resolve(output.trim());
        } else {
          reject(new Error('Cannot load the database'));
        }
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

// Route to handle the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route to handle the /students endpoint
app.get('/students', (req, res) => {
  const fileName = process.argv[2];

  if (!fileName) {
    res.status(500).send('File not provided');
    return;
  }

  countStudents(fileName)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
