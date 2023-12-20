"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const StyledBoxContainer = styled(Box)({
  position: "relative",
  ":hover": {
    opacity: "0.5",
  },
  ":hover .upload-icon": {
    display: "block",
  },
});

export default function MediaEditContainer({ children, onUpload }) {
  return (
    <Box>
      <StyledBoxContainer>
        {children}
        <div className="upload-icon">
          <CameraAltOutlinedIcon
            sx={{
              transform: "scale(3)",
              cursor: "pointer",
            }}
            onClick={onUpload}
          />
        </div>
      </StyledBoxContainer>
    </Box>
  );
}
