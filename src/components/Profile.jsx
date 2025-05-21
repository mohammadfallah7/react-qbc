import Avatar from "./Avatar";

const Profile = (props) => {
  return <Avatar size={props.size} src={props.src} alt={props.alt} />;
};

export default Profile;
