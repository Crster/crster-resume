import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";

function Header() {
  return (
    <div className="flex flex-col gap-y-3 items-center text-center sm:grid sm:grid-cols-3 sm:text-start">
      <ProfileImage/>

      <ProfileName className={"col-span-2"}/>
    </div>
  );
}

export default Header;
