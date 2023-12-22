import Box from "@mui/material/Box";
import MarqueeWidget from "./MarqueeWidget";
import CardWidget from "./CardWidget";
import NoImageWidget from "./NoImageWidget";

export default function MarqueeWidgetContainer({ imageList }) {
  return (
    <>
      {!!imageList.length ? (
        <MarqueeWidget>
          <Box sx={{ display: "flex" }}>
            {imageList.map((img) => {
              return <CardWidget key={img.asset_id} imgSrc={img.url} />;
            })}
          </Box>
        </MarqueeWidget>
      ) : (
        <NoImageWidget />
      )}
    </>
  );
}
