import React from "react";
import Button from "./Button";

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
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
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
