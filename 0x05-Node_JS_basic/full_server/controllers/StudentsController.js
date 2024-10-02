import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];
    try {
      const students = await readDatabase(dbFile);
      let output = 'This is the list of our students\n';

      // Sort fields alphabetically (case-insensitive)
      const fields = Object.keys(students).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      fields.forEach((field) => {
        output += `Number of students in ${field}: ${
          students[field].length
        }. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const dbFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(dbFile);
      const majorStudents = students[major] || [];
      res.status(200).send(`List: ${majorStudents.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
