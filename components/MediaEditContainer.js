"use client";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

export default function MediaEditContainer({ children, onUpload }) {
  return (
    <Box className="media-edit-container">
      <Box className="main-content">{children}</Box>
      <Box className="upload-button-section">
        <Button
          component="label"
          variant="contained"
          startIcon={<FileUploadOutlinedIcon />}
          sx={{ margin: "20px" }}
          onClick={onUpload}
        >
          Update Images
        </Button>
      </Box>
    </Box>
  );
}
