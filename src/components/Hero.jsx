import React, { useState, useEffect } from "react";
import Button from "./Button";
import CardComponent from "./CardComponent";
import CarouselSlide from "./Carousel";

const Hero = () => {
  const [increaseCount, setincreaseCount] = useState(0);
  useEffect(() => {
    function LoadData() {
      // setInterval(() => {
      console.log("Hello");
      // }, 1000);
    }
    LoadData();
  }, []);

  const handleClick = () => {
    setincreaseCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto my-5 bg-indigo-100 p-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dicta laboriosam saepe natus blanditiis fugiat labore quo mollitia
          quisquam enim maxime deleniti eaque vero minima atque sapiente odio,
          ducimus asperiores. Aliquam reprehenderit, asperiores sint illo
          dolorem suscipit delectus explicabo facere nemo. Vero explicabo unde
          esse molestiae autem omnis ab magni voluptatibus ad assumenda
          reiciendis, earum delectus consequatur cum, officia error. Iste
          dignissimos ut aliquid saepe excepturi laborum. Fugit eaque doloremque
          provident, cumque voluptatem eos repudiandae ea labore soluta commodi
          nisi animi, excepturi quod ipsa facilis ab ullam consectetur
          reiciendis incidunt. Nihil fugit quam, aspernatur ad voluptas eius
          consectetur fuga deleniti maiores, omnis animi eum labore dolor
          tempore dolorum aliquam, corporis et nemo aut laborum! Quam dicta
          cupiditate tempora provident doloremque! Quisquam officiis neque, quae
          iure adipisci, ea cumque eius quidem incidunt ducimus tempore fugiat
          ab deserunt ipsum reiciendis earum vel perferendis blanditiis minus?
          Doloribus consequatur magnam maxime rem! Dolor, doloribus. Placeat,
          sequi aspernatur doloribus quos asperiores, fuga architecto dolor
          inventore possimus eaque molestias aut adipisci dolorum dicta
          exercitationem quas ipsam ipsa corrupti excepturi sunt voluptatum
          error numquam. Pariatur, placeat at. Voluptatum quidem sunt harum.
          Dolores fugiat facere dolore corrupti facilis, repellat quasi omnis,
          accusantium quae earum ut. Dicta sequi tempore repudiandae similique,
          optio esse distinctio, laudantium ad earum iusto saepe? Alias expedita
          saepe vel voluptatem doloremque iste perspiciatis provident eum
          aliquid nam repudiandae quasi cum, error enim! Vel, quis id? Ratione
          expedita repellat laboriosam aliquid nobis voluptates saepe unde
          fugiat? Veritatis, iusto quae, pariatur blanditiis, reiciendis
          consequatur adipisci expedita aut quam cum doloremque aliquam ullam
          consectetur? Sapiente aspernatur est eos, vero magni odio excepturi,
          aliquam, consequatur mollitia error deleniti iste. Asperiores dolore
          id praesentium nulla. Labore, provident? Debitis, at inventore.
          Reprehenderit autem tempora saepe cum magnam aliquam modi eos atque ex
          expedita esse exercitationem quibusdam voluptates, debitis, quia
          officiis quidem.
        </p>
        <Button
          handleClick={handleClick}
          className={"py-3 px-6 rounded-full bg-green-600 text-white"}
          textContent={"Click Me"}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 lg:px-20 py-6">
        <CardComponent
          image={"https://edu.sqi.ng/wp-content/uploads/2023/06/college.jpg"}
          title={"National Innovative Diploma (NID)"}
          text={
            "The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE)."
          }
          learnMore={"Learn More"}
        />
        <CardComponent
          image={"https://edu.sqi.ng/wp-content/uploads/2023/06/college.jpg"}
          title={"National Innovative Diploma (NID)"}
          text={
            "The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE)."
          }
          learnMore={"Learn More"}
        />
        <CardComponent
          image={"https://edu.sqi.ng/wp-content/uploads/2023/06/college.jpg"}
          title={"National Innovative Diploma (NID)"}
          text={
            "The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE)."
          }
          learnMore={"Learn More"}
        />
      </div>

      {/* <CarouselSlide /> */}
    </div>
  );
};

export default Hero;
