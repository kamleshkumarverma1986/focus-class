import Box from "@mui/material/Box";
import MarqueeWidgetContainer from "./MarqueeWidgetContainer";
import SectionTitle from "./SectionTitle";

export default function CompanyPlacement({ imageList = [] }) {
  return (
    <Box>
      <SectionTitle title="Our Student Placement" />
      <MarqueeWidgetContainer imageList={imageList} />
    </Box>
  );
}
