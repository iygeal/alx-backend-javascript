import { readFile } from 'fs/promises';

export default async function readDatabase(filePath) {
  const students = {};

  try {
    const data = await readFile(filePath, { encoding: 'utf-8' });
    const lines = data.trim().split('\n').slice(1); // Remove header

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
