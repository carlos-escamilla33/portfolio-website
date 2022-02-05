import React from "react";
import { Navigation, About, Contact, Projects, Skills, Footer, Timeline } from "./components";

function App() {
  return (
    <main className="text-gray-400 bg-black body-font">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
