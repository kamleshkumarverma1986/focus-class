"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import NoImageWidget from "./NoImageWidget";
import SectionTitle from "./SectionTitle";
import ShowMedia from "./ShowMedia";

export default function CarouselWidget({ imageList = [], autoPlay = true }) {
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
                <ShowMedia mediaType={img.resource_type} url={img.url} />
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
