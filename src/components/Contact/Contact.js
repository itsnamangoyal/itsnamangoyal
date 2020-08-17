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
          <img src={linkedin_logo} alt="linkedin logo" />
          <img src={gmail_logo} alt="gmail logo" />
          <img src={github_logo} alt="github logo" />
          <img src={instagram_logo} alt="instagram logo" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
