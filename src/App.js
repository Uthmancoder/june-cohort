import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import NonFound from "./components/NonFound";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="*" element={<NonFound />} />
      </Routes>
    </div>
  );
};

export default App;
