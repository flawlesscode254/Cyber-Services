import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ActionAreaCard({title, image}) {
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20
      }}
      item
      xs={6}
    >
      <Card sx={{ maxWidth: 500, backgroundColor: "#3e0045" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#05e639"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="white">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
