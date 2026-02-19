import Student from "./components/Student";
import { Students } from "./data";

function App() {
  return <>
    <header>
      <h1>My Items</h1>
    </header>

    <div className="cards-view">
      <div className="card-grid">
        <div className="card">
            {Students.map((student) => (
              <Student key={student.id} student={student} />
            ))}
        </div>
      </div>
    </div>
  </>;
}

export default App;
