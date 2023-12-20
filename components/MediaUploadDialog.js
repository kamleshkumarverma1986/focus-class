"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Tooltip } from "@mui/material";
import MediaUpload from "./MediaUpload";
import CircularProgress from "@mui/material/CircularProgress";

export default function MediaUploadDialog({
  title,
  imageList = [],
  onDelete,
  onUpdate,
  onAdd,
}) {
  const [loadingImageList, setLoadingImageList] = React.useState([]);

  const onInitialUploadHandler = (files) => {
    files = files ? [...files] : [];
    setLoadingImageList(files);
  };

  const onSuccessfulAdd = (uploadedImages) => {
    setLoadingImageList([]);
    onAdd(uploadedImages);
  };

  const onSuccessfulUpdate = (uploadedImages) => {
    setLoadingImageList([]);
    onUpdate(uploadedImages);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {title}
        <Box>
          <MediaUpload
            onInitialUpload={onInitialUploadHandler}
            onSuccessUpload={onSuccessfulAdd}
          >
            <Tooltip title="Add more images">
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${"dada"}`}
              >
                <AddOutlinedIcon />
              </IconButton>
            </Tooltip>
          </MediaUpload>
        </Box>
      </Typography>
      <ImageList variant="masonry" cols={3} gap={12}>
        {imageList.map((img) => (
          <ImageListItem key={img.asset_id}>
            <Image
              src={img.url}
              alt="mediaUploadDialog"
              sizes="100vw"
              height={500}
              width={0}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <ImageListItemBar
              sx={{ position: "relative" }}
              actionIcon={
                <Box sx={{ display: "flex" }}>
                  <Tooltip title="Delete this image">
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${"dada"}`}
                      onClick={() => onDelete(img.asset_id)}
                    >
                      <DeleteForeverOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <MediaUpload
                    isMultiple={false}
                    onInitialUpload={onInitialUploadHandler}
                    onSuccessUpload={onSuccessfulUpdate}
                  >
                    <Tooltip title="Upload new image">
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${"dada"}`}
                      >
                        <CloudUploadOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </MediaUpload>
                </Box>
              }
            />
          </ImageListItem>
        ))}
        {loadingImageList.map((file, index) => (
          <ImageListItem key={index}>
            <Image
              src={URL.createObjectURL(file)}
              alt="mediaUploadDialog"
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
