import ContactInfo from "./Components/ContactInfo";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import WorkExperience from "./Components/WorkExperience";

function App() {
  return (
    <div className="container my-5">
      <Header />

      <div className="flex flex-col sm:flex-row gap-5 mt-5">
        <div className="basis-1/4 flex flex-col gap-y-5">
          <Profile />
          <ContactInfo />
          <Skill />
        </div>

        <div className="basis-3/4 flex flex-col gap-y-5">
          <WorkExperience />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
