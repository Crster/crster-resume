import { IconContext } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function ContactInfo({ className }) {
  return (
    <div className={className}>
      <h2 className="uppercase text-xl font-bold border-b-4 text-primary mb-3">
        Contacts
      </h2>
      <IconContext.Provider value={{ className: "text-primary table-cell mr-5" }}>
        <div className="table">
          <div className="table-row">
            <FaPhone />
            <a className="table-cell" href="tel:+639503402121">(+63) 950-340-2121</a>
          </div>

          <div className="table-row">
            <FaEnvelope />
            <a className="table-cell" href="mailto:adhartmain@live.com">adhartmain@live</a>
          </div>

          <div className="table-row">
            <FaLinkedin />
            <a className="table-cell" href="https://www.linkedin.com/in/amiel-dagadas-24b507ba/">
              https://www.linkedin.com/in/amiel-dagadas-24b507ba
            </a>
          </div>

          <div className="table-row">
            <FaGithub />
            <a className="table-cell" href="https://github.com/Crster">https://github.com/Crster</a>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default ContactInfo;
