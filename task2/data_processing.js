import { students } from "../Task1/data_management.js";

const studentNames = students.map(
  (student) => student.name
);

// console.log(studentNames );


const toppers = students.filter(
    (student)=>student.marks >70
   );

console.log(toppers);




const student = students.find(
    (student)=> student.id ==2
)

console.log(student);


const totalMarks = students.reduce(
  (sum, student) => sum + student.marks,
  0
);



const average= totalMarks/ students.length
console.log(average);


const {email,marks,course,name} = students;

console.log(email);
console.log(marks);
console.log(course);
console.log(name);





