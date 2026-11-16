import StudentCard from "./StudentCard";

function StudentList({students}) {
  

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          email={student.email}
          course={student.course}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default StudentList;