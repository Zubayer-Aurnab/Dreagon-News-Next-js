"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { IconButton, Stack } from "@mui/material";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import Header from "./Header";

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
    pathname: "/categories/news?category=all-news",
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

function NavBar() {
  return (
    <>
      <Header />
      <AppBar
        position="static"
        sx={{
          bgcolor: "black",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={Logo} alt="Logo" />
            <Box className="w-full text-center space-x-4">
              {pages.map((page) => (
                <Link key={page} href={page.pathname}>
                  <Button sx={{color:"white"}}>{page.route}</Button>
                </Link>
              ))}
            </Box>
            <Box className="">
              <Stack direction="row" spacing={2}>
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default NavBar;
