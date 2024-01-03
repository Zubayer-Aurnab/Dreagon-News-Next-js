import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import topNews4 from "../../../assets/image_4.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import image5 from "../../../assets/image_5.png";
import image6 from "../../../assets/image_6.png";
const Sidebar = () => {
  return (
    <div className="mt-5">
      <Card>
        <CardMedia>
          <Image src={topNews4} alt="Top-news" width={2000} />
        </CardMedia>
        <CardActions>
          <Button size="small" sx={{ background: "red" }}>
            Technology
          </Button>
        </CardActions>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "600" }}
          >
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "20px", marginBottom: "20px" }}
          >
            By Awlad Hossain - Mar 18 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </Card>

      <Box>
        <Grid>
          <Card className="mt-10" sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia>
              <Image className="w-full h-full" src={image5} alt="side photo " />
            </CardMedia>
          </Card>
          <Card className="mt-10" sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia>
              <Image className="w-full h-full" src={image5} alt="side photo " />
            </CardMedia>
          </Card>
          <Card className="mt-10" sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia>
              <Image className="w-full h-full" src={image5} alt="side photo " />
            </CardMedia>
          </Card>
          <Card className="mt-10" sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia>
              <Image className="w-full h-full" src={image5} alt="side photo " />
            </CardMedia>
          </Card>
          <Box className="flex justify-center">
            <Image className="mt-5 " src={image6} alt="bottom image" />
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Sidebar;
