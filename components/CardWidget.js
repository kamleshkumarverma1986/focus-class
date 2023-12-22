import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

export default function CardWidget({ imgSrc }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgSrc} alt="card img" />
      </CardActionArea>
    </Card>
  );
}
