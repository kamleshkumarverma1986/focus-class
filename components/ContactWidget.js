import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function ContactWidget() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 30,
        right: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 9,
      }}
    >
      <a href="tel:917047528148">
        <Fab color="primary" size="small" aria-label="add" sx={{ m: "5px" }}>
          <CallOutlinedIcon />
        </Fab>
      </a>
      <a href="//api.whatsapp.com/send?phone=917047528148&text=Hi, I want to enquire for course">
        <Fab color="primary" size="small" aria-label="add" sx={{ m: "5px" }}>
          <WhatsAppIcon />
        </Fab>
      </a>
    </Box>
  );
}
