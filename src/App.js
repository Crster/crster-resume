import ContactInfo from "./Components/ContactInfo";
import Education from "./Components/Education";
import Profile from "./Components/Profile";
import ProfileImage from "./Components/ProfileImage";
import ProfileName from "./Components/ProfileName";
import Skill from "./Components/Skill";
import WorkExperience from "./Components/WorkExperience";
import { ReactComponent as WaveSVG } from "./Assets/wave.svg";

function App() {
  return (
    <div className="container my-24">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 print:hidden"
        style={{ zIndex: -1 }}
      >
        <WaveSVG />
      </div>

      <div className="md:flex">
        <div className="flex-initial md:w-96">
          <ProfileImage className="ml-auto mr-auto mb-12" />
          <ProfileName className="mb-12 text-center block md:hidden" />
          <Profile className="mb-10 md:pr-24" />
          <ContactInfo className="mb-10 md:pr-24" />
          <Skill className="mb-10 md:pr-24" />
        </div>
        <div>
          <ProfileName className="mb-24 hidden md:block" />
          <WorkExperience className="mb-10" />
          <Education className="mb-10" />
        </div>
      </div>
    </div>
  );
}

export default App;
