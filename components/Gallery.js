"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import NoImageWidget from "./NoImageWidget";
import SectionTitle from "./SectionTitle";

export default function Gallery({ imageList = [] }) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <SectionTitle title="Our Gallery" />
      {!!imageList.length ? (
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
      ) : (
        <NoImageWidget />
      )}
    </Box>
  );
}
