const students=[
    {id:1,name:"rahul",email:"rahul@example.com",course:"Html",marks:89},
    {id:2,name:"dilip",email:"dilip@example.com",course:"Python",marks:93},
    {id:3,name:"sushil",email:"sushil@example.com",course:"Javascript",marks:79},
    {id:4,name:"aman",email:"aman@example.com",course:"mongodb",marks:96},
    {id:5,name:"amit",email:"amit@example.com",course:"Node.js",marks:56},

]

 

 function getStudents() {
  return students;
}

 const calculateAverage = (students) => {
  const total = students.reduce(
    (sum, student) => sum + student.marks, 0
  );

  return total / students.length;
};

 
console.log(calculateAverage(students));

export { students, getStudents, calculateAverage };