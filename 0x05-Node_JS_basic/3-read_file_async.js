/* eslint-disable */
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the file into lines, and remove any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const studentCount = lines.length - 1; // Exclude the header row
    console.log(`Number of students: ${studentCount}`);

    const studentsByField = {};

    // Iterate through the lines and count students per field
    lines.slice(1).forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    });

    // Log the number of students in each field and the list of first names
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}`
      );
    }

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = countStudents;
