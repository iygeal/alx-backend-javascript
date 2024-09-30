const fs = require('fs');

function countStudents(path) {
  try {
    // Attempt to read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file content into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // If the file only has the header, there's no valid student data
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extract student data (skipping the header)
    const students = lines.slice(1).map((line) => line.split(','));

    // Log the total number of students
    console.log(`Number of students: ${students.length}`);

    // Group students by field
    const fields = {};

    students.forEach(([firstname, lastname, age, field]) => {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Log the number of students and the list of names per field
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', '
        )}`
      );
    }
  } catch (error) {
    // Throw an error with a custom message if the file cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
