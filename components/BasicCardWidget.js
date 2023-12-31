import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCardWidget({ title, desc, children }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
}
