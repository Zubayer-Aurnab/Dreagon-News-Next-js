import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
const Footer = () => {
  const pages = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <div>
      <Box className="bg-black px-2 py-10">
        <Container>
          <Box className="text-center space-x-7">
            <IconButton>
              <FacebookIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <YouTubeIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Box className="w-full text-center space-x-2">
            {pages.map((page) => (
              <Link key={page} href={page.pathname}>
                <Button className="text-white">{page.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography color={"gray"} variant="body2" textAlign={"center"}> 
            @2023 . Design by Aurnab
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
