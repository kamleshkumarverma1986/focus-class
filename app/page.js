import CarouselWidget from "@/components/CarouselWidget";
import CardContainer from "@/components/CardContainer";
import EnquiryForm from "@/components/EnquiryForm";
import WidgetContainer from "@/components/WidgetContainer";
import Gallery from "@/components/Gallery";
import { getHomePage } from "@/service";
import OfferAnnouncement from "@/components/OfferAnnouncement";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CompanyPlacement from "@/components/CompanyPlacement";
import ContactWidget from "@/components/ContactWidget";

export const revalidate = 5; // revalidate the data at every 5 sec request

export default async function Home() {
  const {
    carouselImageList,
    offerImageList,
    placementImageList,
    galleryImageList,
  } = await getHomePage();

  return (
    <main style={{ position: "relative" }}>
      {/* CarouselWidget Banners */}
      {!!carouselImageList.length && (
        <CarouselWidget imageList={carouselImageList} />
      )}

      {/* Enquire-Us Button */}
      <WidgetContainer>
        <Box sx={{ textAlign: "center" }}>
          <Button
            size="large"
            href="#enquiry-form"
            variant="contained"
            color="primary"
          >
            Enquire Us
          </Button>
        </Box>
      </WidgetContainer>

      {/* Offer Announcement */}
      {!!offerImageList.length && (
        <WidgetContainer>
          <OfferAnnouncement imageList={offerImageList} />
        </WidgetContainer>
      )}

      {/* Enquiry Form */}
      <WidgetContainer>
        <EnquiryForm />
      </WidgetContainer>

      {/* Card Container */}
      <WidgetContainer>
        <CardContainer />
      </WidgetContainer>

      {/* Company Placement */}
      {!!placementImageList.length && (
        <WidgetContainer>
          <CompanyPlacement imageList={placementImageList} />
        </WidgetContainer>
      )}

      {/* Gallery */}
      {!!galleryImageList.length && (
        <WidgetContainer>
          <Gallery imageList={galleryImageList} />
        </WidgetContainer>
      )}

      {/* Contact Widget */}
      <ContactWidget />
    </main>
  );
}
