import React from "react";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";

const ParentConponent = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center my-5">What We Offer As A Parent</h1>
      <ul className="flex items-center justify-evenly">
        <li className="border-b-2 font-semibold cursor-pointer border-slate-800 ">
          <Link to={"/what-we-offer"}>Child 1 </Link>
        </li>
        <li className="border-b-2 font-semibold cursor-pointer border-slate-800 ">
          <Link to={"child-two"}>Child 2 </Link>
        </li>
        <li className="border-b-2 font-semibold cursor-pointer border-slate-800 ">
          <Link to={"child-three"}>Child 3 </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ParentConponent;
