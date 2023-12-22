import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

export default function NoImageWidget() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Alert severity="warning">
        There is no images, Please upload the images
      </Alert>
    </Box>
  );
}
