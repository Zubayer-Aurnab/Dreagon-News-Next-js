import Head from "@/assets/Header.png";
import getCurrentDate from "@/utils/getCurrentDate";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <div>
      <Box className="flex justify-center my-4">
        
        <Image alt="" src={Head} />
      </Box>
      <Typography color={"gray"} variant="body2" textAlign={"center"} className="my-2">
        @2023 . Design by Aurnab
      </Typography>
      <Typography align="center" className="mb-2">{currentDate}</Typography>
    </div>
  );
};

export default Header;
