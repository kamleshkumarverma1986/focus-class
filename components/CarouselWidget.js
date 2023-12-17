"use client"

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import defaultLoadingImg from "../public/images/top-img1.jpeg";

export default function CarouselWidget({ imageList = [{ id: 1, url: defaultLoadingImg }], style={ width: '100%', height: '100%' } }) {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            interval={3000}
        >
            {imageList.map((img) => {
                return (
                    <div style={{height: "100%"}} key={img.id}>
                        <Image
                            src={img.url}
                            alt="poster"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={style}
                        />
                    </div>
                )
            })}
        </Carousel>
    );
}