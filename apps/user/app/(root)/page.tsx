import ContactSection from "@/components/ContactSection";
import DroneViewer from "@/components/DroneViewer";
import FeaturesSection from "@/components/FeaturesSection";
import HomeSection from "@/components/HomeSection";
import TechnologySection from "@/components/TechnologiesSection";
import React from "react";

const Home = () => {
  return (
    <main className="pt-12 bg-black">
      <HomeSection />
      <FeaturesSection />
      <TechnologySection />
      <DroneViewer />
      <ContactSection />
    </main>
  );
};

export default Home;
