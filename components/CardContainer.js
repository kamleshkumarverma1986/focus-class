import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardWidget from "./CardWidget";
import Container from "@mui/material/Container";

export default function CardContainer() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={4}>
          <CardWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardWidget />
        </Grid>
      </Grid>
    </Container>
  );
}
