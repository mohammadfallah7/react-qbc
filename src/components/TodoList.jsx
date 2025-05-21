const TodoList = () => {
  const person = {
    username: "Hedy Lamarr",
    theme: { color: "red", fontWeight: "bold", fontSize: "3rem" },
  };

  function formatDate(date) {
    return new Intl.DateTimeFormat("en", { weekday: "short" }).format(date);
  }

  return (
    <>
      <h1 style={person.theme}>
        {person.username}'s Todos for {formatDate(new Date())}
      </h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
};

export default TodoList;
