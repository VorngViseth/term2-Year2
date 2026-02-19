export default function Student({student}) {
  return (
    <li key={student.id} className="student-card">
      <button>
        <img src={student.img.src} alt={student.img.alt} />
        <h4>{student.name}</h4>
        <small>{"Class " + student.class}</small>
        <p>{student.hobby}</p>
      </button>
    </li>
  );
}
