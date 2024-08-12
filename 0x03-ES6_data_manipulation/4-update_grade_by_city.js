export default function getStudentGradeByCity(arr, city, newGrades) {
  if (!Array.isArray(arr)) {
    return [];
  }
  // Step 1: Filter students by city
  const cityStudents = arr.filter((students) => students.location === city);
  // Step 2: Map filtered students with their grade
  return cityStudents.map((student) => {
    // Step 3: Find grade for each student
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    // Step 4: Return the student with the updated grade or "N/A"
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
}
