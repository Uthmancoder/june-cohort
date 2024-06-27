import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Hero from "./Hero";

const HomePage = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
        </div>
      )}
    </div>
  );
};

export default HomePage;
