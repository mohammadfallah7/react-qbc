const Item = ({ name, isPacked }) => {
  let itemContent = name;
  if (isPacked) itemContent = name + " ✅";

  return <li>{itemContent}</li>;
};

const PackingList = () => {
  const list = [
    { id: 1, isPacked: true, name: "Space suit" },
    { id: 2, isPacked: true, name: "Helmet with a golden leaf" },
    { id: 3, isPacked: false, name: "Photo of Tam" },
  ];

  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        {list.map((item) => (
          <Item key={item.id} name={item.name} isPacked={item.isPacked} />
        ))}
      </ul>
    </section>
  );
};

export default PackingList;
