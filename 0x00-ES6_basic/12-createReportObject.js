export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // includes all employees using spread operator
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
