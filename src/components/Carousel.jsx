import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CarouselSlide = () => (
  <Carousel autoplay>
    <div>
      <h3 className="w-[300px] h-[250px] bg-slate-700 text-white flex items-center justify-center">
        1
      </h3>
    </div>
    <div>
      <h3 className="w-[300px] h-[250px] bg-slate-700 text-white flex items-center justify-center">
        2
      </h3>
    </div>
    <div>
      <h3 className="w-[300px] h-[250px] bg-slate-700 text-white flex items-center justify-center">
        3
      </h3>
    </div>
    <div>
      <h3 className="w-[300px] h-[250px] bg-slate-700 text-white flex items-center justify-center">
        4
      </h3>
    </div>
  </Carousel>
);
export default CarouselSlide;
