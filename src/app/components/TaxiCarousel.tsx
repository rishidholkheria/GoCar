import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TaxiCarousel = () => {
  return (
    <div className="w-full min-h-[60vh]">
      <Carousel className="w-full h-full flex flex-col justify-between p-4 box-border">
        <CarouselContent className="flex-1 h-full mx-2 bg-white p-0 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="h-full pl-1 md:basis-1/2 lg:basis-1/3 flex"
            >
              <div className="flex flex-col h-full w-full">
                <Card className="h-full p-0">
                  <CardContent className="flex items-center justify-center w-full h-full p-0">
                    <div className="w-full h-3/4">
                      <img
                        src="/assets/carEx1.png"
                        alt="Taxi_Img"
                        className="w-[27vw] h-3/5 mx-auto object-cover"
                      />
                      <button className="absolute bottom-12 right-2 m-4 rounded-full p-3 bg-lime-400">
                        FAB
                      </button>
                      <div className="flex w-full p-7 rounded-b-xl bg-[#111F4D] text-white">
                        <h2>Swift Desire</h2>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-4 mt-10 mb-2">
          <CarouselPrevious className="static cursor-pointer" />
          <CarouselNext className="static cursor-pointer" />
        </div>
      </Carousel>
    </div>
  );
};

export default TaxiCarousel;
