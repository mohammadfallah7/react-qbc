const Button = () => {
  const handleClick = () => {
    alert("Hello");
  };

  return <button onClick={handleClick}>I don't do anything</button>;
};

export default Button;
