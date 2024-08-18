interface Teacher {
  readonly firstName: string; // readonly: can only be set when the object is created
  readonly lastName: string; // readonly: can only be set when the object is created
  fullTimeEmployee: boolean; // mandatory field
  yearsOfExperience?: number; // optional field
  location: string; // mandatory field
  [key: string]: any; // allows additional properties with any value
}

// Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // New required property for Directors
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement printTeacher function
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName[0]}. ${lastName}`;
};

// Demonstration
console.log(printTeacher('John', 'Doe'));
