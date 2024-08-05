export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to hold employee names
  const employees = [];

  // Iterate through the iterator and collect each employee's name
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the collected employee names with ' | ' and return the resulting string
  return employees.join(' | ');
}
