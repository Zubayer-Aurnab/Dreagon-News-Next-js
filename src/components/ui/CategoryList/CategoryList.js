import { getAllCategories } from "@/utils/getAllCategories";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();
  console.log(allCategories);
  return (
    <Box className="px-5 py-4 mt-5 rounded-lg bg-gray-200">
      <Typography className="text-2xl font-bold">Categories</Typography>
      <Divider />
      <Stack rowGap={2} sx={{ mt: 2.5 }}>
        {allCategories.map((category) => (
          <Button variant="outlined" key={category.id} className="font-bold">
            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
