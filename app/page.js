import CarouselWidget from "@/components/CarouselWidget";
import CardContainer from "@/components/CardContainer";
import EnquiryForm from "@/components/EnquiryForm";
import WidgetContainer from "@/components/WidgetContainer";
import Gallery from "@/components/Gallery";
import { getHomePage } from "@/service";
import OfferAnnouncement from "@/components/OfferAnnouncement";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const revalidate = 5; // revalidate the data at every 5 sec

export default async function Home() {
  const { carouselImageList, offerImageList, galleryImageList } =
    await getHomePage();

  return (
    <main style={{ position: "relative" }}>
      <CarouselWidget imageList={carouselImageList} />
      <WidgetContainer>
        <OfferAnnouncement imageList={offerImageList} />
      </WidgetContainer>
      <WidgetContainer>
        <EnquiryForm />
      </WidgetContainer>
      <WidgetContainer>
        <CardContainer />
      </WidgetContainer>
      <WidgetContainer>
        <Gallery title="Our Gallery" imageList={galleryImageList} />
      </WidgetContainer>
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
    </main>
  );
}
