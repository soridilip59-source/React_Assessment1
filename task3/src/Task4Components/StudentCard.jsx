 
function StudentCard({name,email,marks,course}) {
  return (
    <div className="student-card">
        <div className="student-grid">

        <h3>{name}</h3>
        <p> {email}</p>
        <p>{course} </p>
        <p>{marks} </p>
        </div>

        
    </div>
  )
}

export default StudentCard