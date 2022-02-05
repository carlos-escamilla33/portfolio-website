import React from "react";
import { Navigation, About, Contact, Projects, Skills, Footer } from "./components";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
