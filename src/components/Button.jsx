import React from "react";

const Button = ({ textContent, className, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className={className}>
        {textContent}
      </button>
    </div>
  );
};

export default Button;
