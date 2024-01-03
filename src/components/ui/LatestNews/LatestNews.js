import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import topNews from "../../../assets/image_1.png";
import topNews2 from "../../../assets/image_2.png";
import topNews3 from "../../../assets/image_3.png";
import topNews4 from "../../../assets/image_4.png";
import Image from "next/image";
import Grid from "@mui/material/Grid";
// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const LatestNews = () => {
  return (
    <div>
      <Box className="my-5">
        <Card>
          <CardMedia>
            <Image src={topNews} alt="Top-news" width={2000} />
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

        <Grid className="mt-10" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card>
              <CardMedia>
                <Image src={topNews} alt="Top-news" width={2000} />
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
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardMedia>
                <Image src={topNews2} alt="Top-news" width={2000} />
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
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardMedia>
                <Image src={topNews3} alt="Top-news" width={2000} />
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
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
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
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LatestNews;
