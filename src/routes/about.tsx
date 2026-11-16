import React from "react";
import AboutIntro from "../sections/About/aboutIntro";
import WorkingPrinciples from "../sections/About/workingPrinciples";
import ExperienceRecognition from "../sections/About/experience";

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutIntro />
      <WorkingPrinciples />
      <ExperienceRecognition />
    </>
  );
};

export default AboutPage;
