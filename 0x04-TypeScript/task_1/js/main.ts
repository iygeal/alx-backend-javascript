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

// Demonstration
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
