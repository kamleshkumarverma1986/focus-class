import Box from "@mui/material/Box";
import CardWidget from "./CardWidget";
import MarqueeWidget from "./MarqueeWidget";
import Typography from "@mui/material/Typography";

export default function OfferAnnouncement({ imageList = [] }) {
  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Offer Announcement
      </Typography>
      <MarqueeWidget>
        <Box sx={{ display: "flex" }}>
          {imageList.map((img) => {
            return <CardWidget key={img.asset_id} imgSrc={img.url} />;
          })}
        </Box>
      </MarqueeWidget>
    </Box>
  );
}
