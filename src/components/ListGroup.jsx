import { useState } from "react";

const ListGroup = () => {
  const [drink, setDrink] = useState({ title: "Americano", price: 5 });
  const [user, setUser] = useState({
    name: "Mohammad",
    age: 24,
    email: "mohammad@email.com",
    nationality: "Iranian",
  });

  const handleClick = () => {
    setUser({
      ...user,
      nationality: "American",
    });
  };

  return (
    <div className="px-5">
      <button
        className="bg-blue-500 px-2 py-1 text-white rounded cursor-pointer"
        onClick={handleClick}
      >
        Update
      </button>

      <ul className="flex flex-col max-w-lg mx-auto mt-3">
        <li className="flex justify-between items-center">
          <h2>{drink.title}</h2>
          <span>{drink.price}</span>
        </li>
        <li className="flex justify-between items-center">
          <h2>{user.name}</h2>
          <span>{user.nationality}</span>
        </li>
      </ul>
    </div>
  );
};

export default ListGroup;
