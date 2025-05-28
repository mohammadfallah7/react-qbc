const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
