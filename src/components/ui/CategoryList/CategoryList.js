import { getAllCategories } from "@/utils/getAllCategories";
import React from "react";

const CategoryList = async () => {
  const {data:allCategories} = await getAllCategories();
  console.log(allCategories);
  return <div>
    categories
  </div>;
};

export default CategoryList;
