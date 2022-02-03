import './App.css';
import { Navigation, About, Contact, Projects, Skills } from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
