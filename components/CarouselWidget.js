"use client";

import { Carousel } from "react-responsive-carousel";
import defaultCarouselImage from "../public/images/defaultCarouselImage.jpg";
import Image from "next/image";

export default function CarouselWidget({
  imageList,
  style = { width: "100%", height: "100%" },
  autoPlay = true,
}) {
  imageList =
    imageList && imageList.length
      ? imageList
      : [
          {
            asset_id: 1,
            resource_type: "image",
            secure_url: defaultCarouselImage,
            url: defaultCarouselImage,
          },
        ];
  return (
    <>
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
    </>
  );
}
