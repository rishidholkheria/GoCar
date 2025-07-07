import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const videoList = [
  "/assets/GoccarVideo1.mp4",
  "/assets/GoccarVideo2.mp4",
  "/assets/GoccarVideo3.mp4",
];

const EmblaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % videoList.length;
      const nextBtn = carouselRef.current?.querySelector(
        "[data-carousel-next]"
      ) as HTMLElement;
      nextBtn?.click();
      return nextIndex;
    });
  };

  return (
    <div className="flex flex-col items-center w-full h-2/3 overflow-hidden">
      <Carousel
        className="w-3/4 h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden"
        ref={carouselRef}
      >
        <CarouselContent className="w-full h-full flex">
          {videoList.map((src, idx) => (
            <CarouselItem key={idx} className="min-w-full h-full">
              <video
                autoPlay
                muted
                controls
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-4 mt-5 relative z-10">
          <CarouselPrevious className="static" data-carousel-prev />
          <CarouselNext className="static" data-carousel-next />
        </div>
      </Carousel>
    </div>
  );
};

export default EmblaCarousel;
