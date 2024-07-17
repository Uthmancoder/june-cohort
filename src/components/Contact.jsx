import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Contact = () => {
  const AllProducts = useSelector((state) => state.AllProducts);
  return (
    <div>
      <Navbar />

      <div className="container mt-5 max-w-[1100px] mx-auto">
        <h1 className="text-center text-4xl font-normal text-indigo-500 font-mono">
          Contact Page
        </h1>

        <p className="p-3 shadow-md mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          assumenda molestias porro iusto inventore magni dolor quod. Cum nobis
          accusamus minima perferendis ad corporis optio illo. Nam praesentium
          nobis atque! Doloribus voluptatibus commodi recusandae eos sequi nihil
          non, qui neque expedita quos distinctio voluptatem laudantium
          repellendus soluta ea! Aut perferendis tenetur sunt quibusdam! Sint
          dignissimos libero harum porro eveniet dolorum. Dolorem ipsum magnam,
          voluptate fuga numquam esse optio, in aut ad doloremque et! Vel,
          magni! Modi provident fuga veritatis? Reprehenderit nemo culpa minima
          eos delectus excepturi temporibus rem quaerat incidunt. Rerum,
          dolorem. Facere, ipsum natus. Quia impedit vel perspiciatis fugit non!
          Ipsam ab eligendi magnam aperiam. Iure repellendus hic iste,
          necessitatibus ea mollitia quasi consectetur, atque laudantium eaque
          eveniet dicta. Labore dicta accusamus illo officiis soluta
          voluptatibus totam, ipsam tenetur, voluptates id, rerum provident?
          Omnis alias laborum nobis? Dolor, minima eaque ipsam saepe aperiam
          veniam culpa provident deleniti? Odio, aspernatur. magni! Modi
          provident fuga veritatis? Reprehenderit nemo culpa minima eos delectus
          excepturi temporibus rem quaerat incidunt. Rerum, dolorem. Facere,
          ipsum natus. Quia impedit vel perspiciatis fugit non! Ipsam ab
          eligendi magnam aperiam. Iure repellendus hic iste, necessitatibus ea
          mollitia quasi consectetur, atque laudantium eaque eveniet dicta.
          Labore dicta accusamus illo officiis soluta voluptatibus totam, ipsam
          tenetur, voluptates id, rerum provident? Omnis alias laborum nobis?
          Dolor, minima eaque ipsam saepe aperiam veniam culpa provident
          deleniti? Odio, aspernatur.
        </p>

        {AllProducts.map((data) => (
          <div key={data.id} className="border-2 p-5 rounded-lg h-fit ">
            <div className="w-full h-[200px] md:max-w-[250px] mx-auto">
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
              <button
                // onClick={() => handleEdit(data.id)}
                className="bg-green-800 text-xs py-2 px-5 rounded-lg text-white"
              >
                Edit
              </button>
              <button
                // onClick={() => handleDelete(data.id)}
                className="bg-red-800 text-xs  py-2 px-5 rounded-lg text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
