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

// Interface fpr class constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}

// Demonstration
const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());
