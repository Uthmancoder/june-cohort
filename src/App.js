import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import NonFound from "./components/NonFound";
import Services from "./components/Services";
import ViewDetails from "./components/ViewDetails";
import ParentConponent from "./components/ParentConponent";
import Childone from "./components/Childone";
import ChildTwo from "./components/ChildTwo";
import ChildThree from "./components/ChildThree";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/view-details/:id" element={<ViewDetails />} />
        <Route path="/what-we-offer" element={<ParentConponent />}>
          <Route index element={<Childone />} />
          <Route path="child-two" element={<ChildTwo />} />
          <Route path="child-three" element={<ChildThree />} />
        </Route>

        <Route path="*" element={<NonFound />} />
      </Routes>
    </div>
  );
};

export default App;
