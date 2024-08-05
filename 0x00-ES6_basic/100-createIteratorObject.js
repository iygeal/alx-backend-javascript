export default function createIteratorObject(report) {
  // Define a generator function to create an iterator
  function* employeeGenerator() {
    // Iterate over all the departments in the allEmployees object
    for (const department of Object.values(report.allEmployees)) {
      // Iterate over all employees in each department
      for (const employee of department) {
        // Yield each employee
        yield employee;
      }
    }
  }

  // Return the iterator created by the generator function
  return employeeGenerator();
}
