import CarouselWidget from "@/components/CarouselWidget";
import MarqueeWidget from "@/components/MarqueeWidget";
import CardContainer from "@/components/CardContainer";
import EnquiryForm from "@/components/EnquiryForm";
import WidgetContainer from "@/components/WidgetContainer";
import Gallery from "@/components/Gallery";
import { getHomePage } from "@/service";

export const revalidate = 5; // revalidate the data at every 5 sec

export default async function Home() {
  const { carouselImageList, galleryImageList } = await getHomePage();

  return (
    <main>
      <CarouselWidget imageList={carouselImageList} />
      <WidgetContainer>
        <EnquiryForm />
      </WidgetContainer>
      <WidgetContainer>
        <CardContainer />
      </WidgetContainer>
      <WidgetContainer>
        <MarqueeWidget />
      </WidgetContainer>
      <WidgetContainer>
        <Gallery title="Our Gallery" imageList={galleryImageList} />
      </WidgetContainer>
    </main>
  );
}
