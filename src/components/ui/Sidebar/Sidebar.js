
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import topNews4 from "../../../assets/image_4.png";
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
    </div>
  );
};

export default Sidebar;
