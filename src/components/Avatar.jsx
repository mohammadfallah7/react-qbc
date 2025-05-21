const Avatar = ({ src: mySrc, alt: myAlt = "image alt", size = 100 }) => {
  return (
    <img
      src={`https://i.imgur.com/${mySrc}.jpg`}
      alt={myAlt}
      className="photo"
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

export default Avatar;
