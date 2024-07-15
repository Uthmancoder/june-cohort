import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const { handleBlur, handleChange, touched, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("FirstName is required")
        .min(5, "firstName muhst not be less than 5 characters")
        .max(15, "Firstname must not be longer than 15 characters"),
      lastName: Yup.string()
        .required("lastName is required")
        .min(5, "lastName muhst not be less than 5 characters")
        .max(15, "lastName must not be longer than 15 characters"),
      email: Yup.string()
        .email("Must be a valid email")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at lest 8 characters long")
        .max(20, "password muxt not be longer than 20 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
          "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special characte"
        ),
    }),
  });

  return (
    <>
      <div className="bg-slate-200 w-1/2 mx-auto my-6 p-4 rounded-2xl">
        <h2
          id="addProd"
          className="text-center fs-4 text-4xl alert alert-primary"
        >
          Sign Up
        </h2>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="firstName"
          name="firstName"
          className={` my-3 w-full p-3 rounded-md ${
            touched.firstName && errors.firstName
              ? "border-2 border-red-600 ring-4 ring-red-600"
              : "border-none outline-none focus:ring-4  ring-green-600"
          } `}
          placeholder="Enter First Name"
        />
        {touched.firstName && errors.firstName ? (
          <small className="text-red-600">{errors.firstName}</small>
        ) : null}

        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          name="lastName"
          id="lastName"
          className=" my-3 w-full p-3 rounded-md"
          placeholder="Enter Last Name"
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
          id="email"
          className=" my-3 w-full p-3 rounded-md"
          placeholder="Enter Email"
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          name="password"
          id="password"
          className=" my-3 w-full p-3 rounded-md"
          placeholder="Enter password"
        />

        <button
          id="signUpUser"
          className="py-3 w-full bg-black text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </>
  );
};
export default SignUp;
