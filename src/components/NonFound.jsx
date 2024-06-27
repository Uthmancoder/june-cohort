import React from "react";
import { Link } from "react-router-dom";

const NonFound = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold text-red-600">
            OOPS!! The Page You're Looking For Does Not Exist😥
          </h1>
          <Link
            to={"/"}
            className="text-blue-600 border-b w-fit border-blue-600 text-start"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NonFound;
