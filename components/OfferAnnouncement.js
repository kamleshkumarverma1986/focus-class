import Box from "@mui/material/Box";
import MarqueeWidgetContainer from "./MarqueeWidgetContainer";
import SectionTitle from "./SectionTitle";

export default function OfferAnnouncement({ imageList = [] }) {
  return (
    <Box>
      <SectionTitle title="Offer Announcement" />
      <MarqueeWidgetContainer imageList={imageList} />
    </Box>
  );
}
