import { useState } from "react";

const ListGroup = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mohammad",
      age: 24,
    },
    {
      id: 2,
      name: "Ali",
      age: 28,
    },
  ]);

  const handleClick = () => {
    // Add
    setUsers([{ id: users.length + 1, name: "Reza", age: 30 }, ...users]);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUpdate = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: "Updated Name" } : user
      )
    );
  };

  return (
    <div className="px-5">
      <button
        className="bg-blue-500 px-2 py-1 text-white rounded cursor-pointer"
        onClick={handleClick}
      >
        Add
      </button>

      <ul className="flex flex-col gap-3 max-w-lg mx-auto mt-3">
        {users.map((user) => (
          <li className="flex justify-between items-center bg-slate-300 px-5 py-2 rounded">
            <h2>{user.name}</h2>
            <span>{user.age}</span>
            <div className="flex gap-1">
              <button onClick={() => handleDelete(user.id)}>D</button>
              <button onClick={() => handleUpdate(user.id)}>U</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
