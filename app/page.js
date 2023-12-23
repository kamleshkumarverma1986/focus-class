import CarouselWidget from "@/components/CarouselWidget";
import CardSection from "@/components/CardSection";
import EnquiryForm from "@/components/EnquiryForm";
import WidgetContainer from "@/components/WidgetContainer";
import Gallery from "@/components/Gallery";
import { getHomePage } from "@/service";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ContactWidget from "@/components/ContactWidget";
import MarqueeSection from "@/components/MarqueeSection";

export const revalidate = 5; // revalidate the data at every 5 sec request

export default async function Home() {
  const {
    carouselImageList,
    offerImageList,
    topperStudentImageList,
    facultyImageList,
    placementImageList,
    testimonialImageList,
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

      {/* Offer Announcement Marquee */}
      {!!offerImageList.length && (
        <WidgetContainer>
          <MarqueeSection
            title="Offer Announcement"
            imageList={offerImageList}
          />
        </WidgetContainer>
      )}

      {/* Enquiry Form */}
      <WidgetContainer>
        <EnquiryForm />
      </WidgetContainer>

      {/* Topper Students Marquee */}
      {!!topperStudentImageList.length && (
        <WidgetContainer>
          <MarqueeSection
            title="Our Topper Students"
            imageList={topperStudentImageList}
          />
        </WidgetContainer>
      )}

      {/* Card Section for Our Faculty */}
      {!!facultyImageList.length && (
        <WidgetContainer>
          <CardSection
            title="Our Dedicated Faculty"
            imageList={facultyImageList}
          />
        </WidgetContainer>
      )}

      {/* Company Placement Marquee */}
      {!!placementImageList.length && (
        <WidgetContainer>
          <MarqueeSection
            title="Our Student Placement"
            imageList={placementImageList}
          />
        </WidgetContainer>
      )}

      {/* Testimonial Marquee */}
      {!!testimonialImageList.length && (
        <WidgetContainer>
          <MarqueeSection
            title="Testimonials"
            imageList={testimonialImageList}
          />
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
