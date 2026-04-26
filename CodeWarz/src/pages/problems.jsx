import problems from "../data/problems";

function Problems() {
  return (
    <div>
      <h1>Problems List</h1>

      {problems.map((problem) => (
        <div key={problem.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h2>{problem.title}</h2>
          <p>Difficulty: {problem.difficulty}</p>
        </div>
      ))}
    </div>
  );
}

export default Problems;