import React from "react";
import Feature from "../Feature/Feature";

const Price = ({ pricen }) => {
  const { name, feature, price } = pricen;
  return (
    <div className="bg-blue-600 flex flex-col p-10 rounded-lg space-y-5 text-white ">
      <div >
        <h2>
          <span className="text-6xl">{price}</span>
          <span className="text-2xl">/mon</span>
        </h2>
        <h2 className="text-3xl font-bold">{name}</h2>
      </div>
      <div className=" flex-grow">
        {
            feature.map((f,idx)=><Feature key={idx} features={f}></Feature>)
        }
      </div>
      <button className="bg-green-500 hover:bg-green-800 py-4 w-full rounded font-bold">Buy Now</button>
    </div>
  );
};

export default Price;
