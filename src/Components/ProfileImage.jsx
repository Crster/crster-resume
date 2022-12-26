import profile from "../Assets/profile.gif";

function ProfileImage({ className }) {
  return (
    <img
      className={`rounded-full outline outline-3 outline-offset-[10px] object-scale-down w-52 h-52 md:w-72 md:h-72 ${className}`}
      style={{ background: '#FFF' }}
      src={profile}
      alt="Amiel Dagadas"
    />
  );
}

export default ProfileImage;
