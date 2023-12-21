import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function CardWidget({ imgSrc }) {
  return (
    <Card sx={{ margin: "10px" }} elevation={3} square>
      <CardMedia
        sx={{ height: 140 }}
        image={imgSrc}
        title="card media"
        component="img"
      />
    </Card>
  );
}
