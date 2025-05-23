import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EmblaCarousel = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Carousel className="w-2/3 h-full bg-yellow-300 flex flex-col items-center justify-center">
        <CarouselContent>
          <CarouselItem>
            <div className="min-h-2/3 bg-yellow-300 flex flex-col items-center justify-center">
              {/* <img src="" alt="" />  */}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-full bg-green-300 flex items-center justify-center">
              Slide 2
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-full bg-blue-300 flex items-center justify-center">
              Slide 3
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Override default absolute positioning */}
        <div className="flex justify-center gap-4 mt-5 relative z-10">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
    </div>
  );
};

export default EmblaCarousel;
