import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function ContactInfo() {
  return (
    <div>
      <h2 className="uppercase text-xl font-bold border-b-4 text-primary">Contacts</h2>
      <ul className="mt-3">
        <li className="flex gap-4">
          <FaPhone size={20} className="text-primary"/>
          <a href="tel:+639503402121">(+63) 950-340-2121</a>
        </li>
        <li className="flex gap-4">
          <FaEnvelope size={20} className="text-primary"/>
          <a href="mailto:adhartmain@live.com">adhartmain@live</a>
        </li>
        <li className="flex gap-4">
          <FaLinkedin size={20} className="text-primary"/>
          <a href="https://www.linkedin.com/in/amiel-dagadas-24b507ba/">
            https://www.linkedin.com/in/amiel-dagadas-24b507ba
          </a>
        </li>
        <li className="flex gap-4">
          <FaGithub size={20} className="text-primary"/>
          <a href="https://github.com/Crster">https://github.com/Crster</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
