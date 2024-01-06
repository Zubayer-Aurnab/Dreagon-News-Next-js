import { getCategoryNews } from "@/utils/getCategoryNews";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
const DynamicNewsPage = async ({ searchParams }) => {
  // console.log(searchParams.category)
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div>
      {/* <h1 className="text-2xl text-red-700 font-bold">
        Page Of {searchParams.category} Total : {data.length} News
      </h1> */}
      <Grid
        className="mt-10"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news, i) => (
          <Grid key={i} item xs={6}>
            <Card>
              <CardMedia sx={{
                "& img":{
                  width: "100%",
                  height: "300px",
                  objectFit:"cover"
                }
              }}>
                <Image src={news.thumbnail_url} alt="Top-news" width={800} height={100} />
              </CardMedia>
              <CardActions>
                <Button size="small" sx={{ background: "red" }}>
                  {news.category}
                </Button>
              </CardActions>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "600" }}
                >
                  {news.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  By {news.author.name} - {news.author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
