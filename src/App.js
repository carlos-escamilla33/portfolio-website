import React from "react";
import { Navigation, About, Contact, Projects, Skills } from "./components";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
