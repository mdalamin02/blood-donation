import React from "react";
import "../../index.css";

function Mission() {
  return (
    <div className="mt-5 md:container md:mx-auto md:mt-[144px] bg-white md:mb-[104px] md:p-10">
      <div className=" ">
        <div className="font-bold mission-text text-center md:text-start">
          Our Mission
        </div>

        <div className="p-4">
          Our mission is to create a seamless connection between blood donors
          and those in urgent need, ensuring no life is lost due to a lack of
          blood. We believe in:
          <br />
          <strong>Accessibility:</strong> Developing a platform that simplifies
          the process of finding and donating blood. <br />
          <strong>Awareness:</strong> Educating communities about the importance
          of blood donation and dispelling myths around it. <br />
          <strong> Impact: </strong>Building a network where every contribution
          counts and every donor feels valued.
        </div>
      </div>
    </div>
  );
}

export default Mission;
