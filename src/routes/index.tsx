import React from "react";
import Archive from "../sections/Home/archive";
import Capabilities from "../sections/Home/capabilities";
import HeroSection from "../sections/Home/heroSection";
import LakeExperience from "../sections/Home/lakeExperience";
import MarqueeRibbon from "../sections/Home/marqueeRibbon";
import Process from "../sections/Home/process";
import Projects from "../sections/Home/projects";
import Testimonials from "../sections/Home/testimonials";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <MarqueeRibbon />
      <Projects />
      <LakeExperience />
      <Capabilities />
      <Process />
      <Archive />
      <Testimonials />
    </>
  );
};

export default HomePage;
