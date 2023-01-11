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
    <div className="container my-24 print:my-4">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 print:hidden"
        style={{ zIndex: -1 }}
      >
        <WaveSVG />
      </div>

      <div className="md:flex print:flex">
        <div className="md:w-96 print:w-72">
          <ProfileImage className="ml-auto mr-auto mb-12 print:ml-8 print:mr-0 print:mb-10" />
          <ProfileName className="mb-12 text-center block md:hidden print:hidden" />
          <Profile className="mb-10 mr-6" />
          <ContactInfo className="mb-10 mr-6" />
          <Skill className="mb-10 mr-6" />
        </div>
        <div>
          <ProfileName className="mb-24 hidden md:block print:block print:mb-8" />
          <WorkExperience className="mb-10" />
          <Education className="mb-10" />
        </div>
      </div>
    </div>
  );
}

export default App;
