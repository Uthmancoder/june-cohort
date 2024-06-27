import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Services = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  const handleViewDetails = (id) => {
    console.log("Product Id : ", id);
  };

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-6 md:p-10 lg:p-16">
        {Products.map((data) => (
          <div key={data.id} className="border-2 p-5 rounded-lg h-full">
            <div className="w-full h-[250px] md:max-w-[250px] mx-auto">
              <img className="w-full h-full" src={data.image} alt="" />
            </div>
            <div className="grid gap-2 max-h-[160px] h-full overflow-y-auto">
              <h1 className="text-center font-bold text-2xl">
                {data.category}
              </h1>
              <h1>{data.title}</h1>
              <p>${data.price}</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button className="bg-slate-800 text-xs py-2 px-5 rounded-lg text-white">
                Add To Cart
              </button>
              <button
                onClick={() => handleViewDetails(data.id)}
                className="bg-slate-800 text-xs  py-2 px-5 rounded-lg text-white"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
