import React from 'react';
import Hero from '../sections/Hero';
import Introduction from '../sections/Introduction';
import VisionMission from '../sections/VisionMission';
import CoreObjectivesMonitor from '../sections/CoreObjectivesMonitor';
import Projects from '../sections/Projects';
import Conclusion from '../sections/Conclusion';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Introduction />
      <VisionMission />
      <CoreObjectivesMonitor />
      <Projects />
      <Conclusion />
    </main>
  );
};

export default HomePage;