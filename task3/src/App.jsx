import "./App.css";
import Navbar from "./Task4Components/Navbar";
import StudentList from "./Task4Components/StudentList";
import Footer from "./Task4Components/Footer";
function App() {

    const students = [
    { id: 1, name: "Rahul", email: "rahul@example.com", course: "HTML", marks: 89 },
    { id: 2, name: "Dilip", email: "dilip@example.com", course: "Python", marks: 93 },
    { id: 3, name: "Sushil", email: "sushil@example.com", course: "JavaScript", marks: 79 },
    { id: 4, name: "Aman", email: "aman@example.com", course: "MongoDB", marks: 96 },
    { id: 5, name: "Amit", email: "amit@example.com", course: "Node.js", marks: 56 }
  ];

     const totalStudents= students.length;
     const totalMarks = students.reduce((sum,student)=> sum+student.marks,0)
     const averageMarks= totalMarks/totalStudents

     const above70 = students.filter((student)=> student.marks>70).length;
  return (
    <div>
      <Navbar />
      <h1>Student Information Dashboard</h1>
      <p>Welcome to our Student Management System.</p>

      <div className="stat">
        <div className="stat_card">
          <h3>Total Student</h3>
          <p>{totalStudents}</p>
        </div>

        <div className="stat_card">
          <h3>Average Marks </h3>
          <p>{averageMarks.toFixed(1)}</p>
        </div>
        <div className="stat_card">
          <h3>Scoring Above 70 </h3>
          <p>{above70}</p>
        </div>

      </div>

      <StudentList students= {students} />
      <Footer/>
    </div>
  );
}

export default App;