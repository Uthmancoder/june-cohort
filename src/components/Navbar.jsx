import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

// const reactClass = {
//   backgroundColor: "red",
//   color: "white",
//   padding: "10px 20px",
//   borderRadius: "10px",
// };

const Navbar = () => {
  const HandleSignUp = () => {
    alert("Signing Up");
  };

  const handleLogin = () => {
    alert("Logging User In");
  };

  return (
    <div className="flex  items-center justify-between bg-gray-300 p-3">
      <h1 className="font-bold text-2xl">Logo</h1>
      <ul className="flex gap-5">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/what-we-offer"}>What We Offer</Link>
        </li>
      </ul>

      <div className="flex gap-5">
        <Button
          handleClick={HandleSignUp}
          className={"py-2 px-5 rounded-md bg-indigo-800  text-white"}
          textContent={"Sign Up"}
        />
        <Button
          handleClick={handleLogin}
          className={"py-2 px-5 rounded-md border border-slate-800  text-black"}
          textContent={"Log In"}
        />
      </div>
    </div>
  );
};

export default Navbar;
