interface Teacher {
  readonly firstName: string; // readonly: can only be set when the object is created
  readonly lastName: string; // readonly: can only be set when the object is created
  fullTimeEmployee: boolean; // mandatory field
  yearsOfExperience?: number; // optional field
  location: string; // mandatory field
  [key: string]: any; // allows additional properties with any value
}

// Demonstration
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Additional property not defined in the interface
};

console.log(teacher3);