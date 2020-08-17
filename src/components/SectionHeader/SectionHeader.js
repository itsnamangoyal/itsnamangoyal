import React from "react";

import "./SectionHeader.scss";

const SectionHeader = ({ heading, id }) => {
  return (
    <div className="section-header" id={id}>
      {heading}
    </div>
  );
};

export default SectionHeader;
