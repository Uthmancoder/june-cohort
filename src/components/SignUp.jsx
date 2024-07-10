import React from "react";
const SignUp = () => {
  return (
    <>
      <div className="bg-slate-200 w-1/2 mx-auto my-6 p-4 rounded-2xl">
        <h2 id="addProd" className="text-center fs-4 text alert alert-primary">
          Sign Up
        </h2>
        <input
          type="text"
          id="firstName"
          className=" my-3"
          placeholder="Enter First Name "
        />

        <input
          type="text"
          id="lastName"
          className=" my-3"
          placeholder="Enter Last Name"
        />
        <input
          type="email"
          id="email"
          className=" my-3"
          placeholder="Enter Email"
        />
        <input
          type="password"
          id="password"
          className=" my-3"
          placeholder="Enter password"
        />

        <button
          id="signUpUser"
          className="btn btn alert alert-primary w-100 mx-auto"
        >
          Submit
        </button>
      </div>
    </>
  );
};
export default SignUp;
