import React from "react";

// const reactClass = {
//   backgroundColor: "red",
//   color: "white",
//   padding: "10px 20px",
//   borderRadius: "10px",
// };

const Navbar = () => {
  return (
    <div className="flex  items-center justify-between bg-gray-300 p-3">
      <h1>NavBar</h1>
      <ul className="flex gap-5">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>

      <div className="flex gap-5">
        <button className="py-2 px-5 border border-slate-900 rounded-lg">
          Sign Up
        </button>
        <button className="py-2 px-5 bg-slate-800 text-white rounded-lg">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
