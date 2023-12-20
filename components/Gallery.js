"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Gallery({ title, imageList = [] }) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <ImageList variant="masonry" cols={matchDownMd ? 1 : 3} gap={8}>
        {imageList.map((img) => (
          <ImageListItem key={img.asset_id}>
            <Image
              src={img.url}
              alt="gallery"
              sizes="100vw"
              height={500}
              width={0}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
