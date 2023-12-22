"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import NoImageWidget from "./NoImageWidget";
import SectionTitle from "./SectionTitle";

export default function CarouselWidget({
  imageList = [],
  style = { width: "100%", height: "100%" },
  autoPlay = true,
}) {
  return (
    <>
      {!!imageList.length ? (
        <Carousel
          autoPlay={autoPlay}
          infiniteLoop
          interval={3000}
          showThumbs={false}
        >
          {imageList.map((img) => {
            return (
              <div style={{ height: "100%" }} key={img.asset_id}>
                <Image
                  src={img.url}
                  alt="poster"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={style}
                />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <>
          <SectionTitle title={"Carousel Banners"} />
          <NoImageWidget />
        </>
      )}
    </>
  );
}
