import { getSingleNews } from "@/utils/getSingleNews";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React from "react";

const NewsDetailPage = async ({ params }) => {
  const { data } = await getSingleNews(params.newsId);
  console.log(data);
  return (
    <div>
      <Box sx={{mt:'20px'}}>
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={6}>
             
              <Image
                src={data.thumbnail_url}
                width={800}
                height={800}
                alt="main"
                className="w-full"
              />
              <Grid container spacing={2} className="mt-4">
                <Grid item sm={6}>
                  <Image
                    src={data.image_url}
                    width={800}
                    height={800}
                    alt="main"
                    className="w-full"
                  />
                </Grid>
                <Grid item sm={6}>
                  <Image
                    src={data.image_url}
                    width={800}
                    height={800}
                    alt="main"
                    className="w-full"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <div className="flex items-center space-x-3 my-2">
                <Image src={data.author.img} width={100} height={100} alt="author-image" className="w-10 h-10 rounded-full object-contain"/>
               <span>{data.author.name}</span><span>-{data.author.published_date}</span>
              </div>
              <div className="mt-4">
                <p>{data.details}</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default NewsDetailPage;
