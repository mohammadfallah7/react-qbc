const AlertButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const Toolbar = ({ handlePlayClick, handleUploadClick }) => {
  return (
    <div
      style={{ background: "lightgray" }}
      onClick={() => {
        alert("On container clicked");
      }}
    >
      <AlertButton onClick={handlePlayClick}>Play Movie</AlertButton>
      <AlertButton onClick={handleUploadClick}>Upload Image</AlertButton>
    </div>
  );
};

export default Toolbar;
