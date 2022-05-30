import "./App.css";
import ResponsiveAppBar from "./components/Nav";

import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
