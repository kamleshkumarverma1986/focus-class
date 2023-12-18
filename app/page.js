import CarouselWidget from "@/components/CarouselWidget";
import topImg1 from "../public/images/top-img1.jpeg";
import topImg2 from "../public/images/top-img2.jpeg";
import topImg3 from "../public/images/top-img3.jpeg";
import MarqueeWidget from "@/components/MarqueeWidget";
import CardContainer from "@/components/CardContainer";
import EnquiryForm from "@/components/EnquiryForm";
import WidgetContainer from "@/components/WidgetContainer";

export default function Home() {
  const imageList = [
    {id: 1, url: topImg1},
    {id: 2, url: topImg2},
    {id: 3, url: topImg3},
  ]

  return (
      <main>
        <CarouselWidget imageList={imageList}/>
        <WidgetContainer>
          <EnquiryForm />
        </WidgetContainer>
        <WidgetContainer>
          <CardContainer />
        </WidgetContainer>
        <WidgetContainer>
          <MarqueeWidget />
        </WidgetContainer>
      </main>
  )
}
