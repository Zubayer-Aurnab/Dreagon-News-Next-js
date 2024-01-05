import React from "react";

const DynamicNewsPage = ({ params ,searchParams}) => {
  console.log(searchParams.category)
  return (
    <div>
      <h1 className="text-2xl text-red-700 font-bold">{searchParams.category}</h1>
    </div>
  );
};

export default DynamicNewsPage;
