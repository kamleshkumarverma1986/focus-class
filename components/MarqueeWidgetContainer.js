import Box from "@mui/material/Box";
import MarqueeWidget from "./MarqueeWidget";
import MarqueeCard from "./MarqueeCard";
import NoImageWidget from "./NoImageWidget";

export default function MarqueeWidgetContainer({ imageList }) {
  return (
    <>
      {!!imageList.length ? (
        <MarqueeWidget>
          <Box sx={{ display: "flex" }}>
            {imageList.map((img) => {
              return <MarqueeCard key={img.asset_id} imgSrc={img.url} />;
            })}
          </Box>
        </MarqueeWidget>
      ) : (
        <NoImageWidget />
      )}
    </>
  );
}
