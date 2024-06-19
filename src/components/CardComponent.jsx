import React from "react";

const CardComponent = ({ image, title, text, learnMore }) => {
  return (
    <div className="grid gap-4">
      <div className="w-full  h-[250px]">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{text}</p>
      <p className="border-b-2 border-slate-800 w-fit">{learnMore}</p>
    </div>
  );
};

export default CardComponent;
