import { useState } from "react";

const users = ["Mohammad", "Reza", "Ahmad", "Ali"];

const App = () => {
  const [index, setIndex] = useState(0);

  const user = users[index];

  return (
    <div className="container mx-auto mt-5 ">
      <button
        disabled={index === 0}
        onClick={() => setIndex(index - 1)}
        className="bg-red-300 rounded cursor-pointer px-2 py-1"
      >
        Prev
      </button>
      <button
        disabled={index > 2}
        onClick={() => setIndex(index + 1)}
        className="bg-blue-300 rounded cursor-pointer px-2 py-1"
      >
        Next
      </button>
      <h1>{user}</h1>
    </div>
  );
};

export default App;
