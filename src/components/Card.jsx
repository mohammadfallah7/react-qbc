import { useEffect, useState } from "react";

const Card = ({ title }) => {
  let [count, setCount] = useState(0);
  const [isLike, setIsLike] = useState(false);

  // Mount for first time && after each update
  // useEffect(() => {
  //   console.log(`Component ${title} built => count: ${count}`);
  // });

  // Mount for first time
  // useEffect(() => {
  //   console.log(`Component built`);
  // }, []);

  // mount for first time && after each array item update
  useEffect(() => {
    console.log(`Component built with like status: ${isLike}`);
  }, [isLike]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleLike = () => {
    // if (isLike) {
    //   setIsLike(false);
    // } else {
    //   setIsLike(true);
    // }

    setIsLike(!isLike);
  };

  return (
    <div
      onClick={handleClick}
      className="w-xs py-5 bg-slate-700 rounded-lg text-white flex flex-col gap-5 items-center cursor-pointer justify-center"
    >
      <h2 className="font-semibold text-3xl">{title}</h2>
      <h3 className="text-xl font-extrabold">{count}</h3>
      <button onClick={handleLike} className="text-3xl cursor-pointer">
        {isLike ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Card;
