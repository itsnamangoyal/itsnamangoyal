import React from "react";

import "./Contact.scss";

//icons
import linkedin_logo from "../../Assets/linkedin_logo.svg";
import github_logo from "../../Assets/github_logo.svg";
import instagram_logo from "../../Assets/instagram_logo.svg";
import gmail_logo from "../../Assets/gmail_logo.svg";

//just text
const puchline = `I am always looking for something exciting to do. So, If you have a project and want me to make it for you then just leave me a message.`;

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="left">
        <span>{puchline}</span>
        <span>
          And also here's my resume: <a href="google.com">open</a>
        </span>
      </div>
      <div className="right">
        <span>shoot me a message or maybe a mail: </span>
        <div className="social-icons">
          <a href="https://linkedin.com/in/namangoyal49" target="blank">
            <img src={linkedin_logo} alt="linkedin logo" />
          </a>
          <a href="mailto:namangoyal4900@gmail.com" target="blank">
            <img src={gmail_logo} alt="gmail logo" />
          </a>
          <a href="https://github.com/itsnamangoyal" target="blank">
            <img src={github_logo} alt="github logo" />
          </a>
          <a href="https://instagram.com/itsnamangoyal" target="blank">
            <img src={instagram_logo} alt="instagram logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
