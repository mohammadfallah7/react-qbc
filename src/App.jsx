import Avatar from "./components/Avatar";
import Button from "./components/Button";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Avatar size={50} src="yXOvdOSs" alt="Hedy Lamarr" />
      <Avatar alt="Lin Lanying" src="1bX5QH6" size={100} />
      <Profile src="MK3eW3Am" alt="Katherine Johnson" size={200} />
      {/* <Button text="Submit button" /> */}
      <Button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Submit Button
      </Button>
    </>
  );
};

export default App;
