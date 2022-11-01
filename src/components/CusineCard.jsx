import React from "react";

export const CusineCard = ({ cusineImage, cusineName }) => {
  return (
    <div>
      <img src={cusineImage} alt="" />
      <h2 className="w-full text-center my-6 text-xl font-bold">
        {cusineName}
      </h2>
    </div>
  );
};
