import CarouselWidget from "@/components/CarouselWidget";
import CardContainer from "@/components/CardContainer";
import EnquiryForm from "@/components/EnquiryForm";
import WidgetContainer from "@/components/WidgetContainer";
import Gallery from "@/components/Gallery";
import { getHomePage } from "@/service";
import OfferAnnouncement from "@/components/OfferAnnouncement";

export const revalidate = 5; // revalidate the data at every 5 sec

export default async function Home() {
  const { carouselImageList, offerImageList, galleryImageList } =
    await getHomePage();

  return (
    <main>
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
    </main>
  );
}
