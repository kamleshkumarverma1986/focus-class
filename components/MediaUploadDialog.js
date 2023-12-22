"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Paper, Tooltip } from "@mui/material";
import MediaUpload from "./MediaUpload";
import CircularProgress from "@mui/material/CircularProgress";

export default function MediaUploadDialog({ imageList = [], onDelete, onAdd }) {
  const [loadingImageList, setLoadingImageList] = React.useState([]);

  const onSuccessfulAdd = (uploadedImages) => {
    setLoadingImageList([]);
    onAdd(uploadedImages);
  };

  return (
    <Box>
      <Paper
        variant="outlined"
        sx={{
          textAlign: "center",
          position: "sticky",
          top: 0,
          zIndex: 999,
          p: 2,
        }}
      >
        <MediaUpload
          onInitialUpload={setLoadingImageList}
          onSuccessUpload={onSuccessfulAdd}
        />
      </Paper>
      <ImageList variant="masonry" cols={3} gap={12}>
        {imageList.map((img) => (
          <ImageListItem key={img.asset_id}>
            <Image
              src={img.url}
              alt="mediaUploadDialogImg"
              sizes="100vw"
              height={500}
              width={0}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <ImageListItemBar
              sx={{ position: "relative", bottom: "7px" }}
              actionIcon={
                <Box sx={{ display: "flex" }}>
                  <Tooltip title="Delete this image">
                    <IconButton
                      aria-label={`Delete this image`}
                      onClick={() => onDelete(img.asset_id)}
                    >
                      <DeleteForeverOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              }
            />
          </ImageListItem>
        ))}
        {loadingImageList.map((file, index) => (
          <ImageListItem key={index}>
            <Image
              src={URL.createObjectURL(file)}
              alt="mediaUploadDialogImg"
              sizes="100vw"
              height={500}
              width={0}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <ImageListItemBar
              title="Loading..."
              subtitle={"Please wait!"}
              sx={{ padding: "5px" }}
              actionIcon={
                <Box>
                  <CircularProgress />
                </Box>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
