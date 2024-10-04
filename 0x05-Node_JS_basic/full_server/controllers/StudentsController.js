import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);

      // Build the output string
      let output = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(students).sort()) {
        output += `Number of students in ${field}: ${
          names.length
        }. List: ${names.join(', ')}\n`;
      }
      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  // eslint-disable-next-line consistent-return
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const names = students[major] || [];

      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
