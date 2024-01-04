import { getAllCategories } from "@/utils/getAllCategories";
import React from "react";

const CategoryList = async () => {
  const {data:allCategories} = await getAllCategories();
  console.log(allCategories);
  return <div>
    <h1 className="text-2xl">categories</h1>
  </div>;
};

export default CategoryList;
