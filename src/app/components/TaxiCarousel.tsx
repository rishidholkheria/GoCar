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
    <div className="w-full min-h-[60vh] mt-5">
      <Carousel className="w-full h-full flex flex-col justify-between p-4 box-border overflow-hidden">
        <CarouselContent className="flex-1 h-full mx-2 bg-white p-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 flex h-[40vh] md:h-full"
            >
              <div className="flex flex-col w-full h-full rounded-2xl relative">
                <Card className="h-full p-0">
                  <CardContent className="flex items-center justify-center w-full h-full p-0">
                    <div className="w-full h-full relative">
                      <img
                        src="/assets/carEx1.png"
                        alt="Taxi_Img"
                        className="w-full h-[50%] object-cover mx-auto"
                      />
                      <button className="absolute bottom-[100px] right-4 m-4 rounded-full p-3 bg-lime-400">
                        FAB
                      </button>
                      <div className="flex flex-col md:flex-row w-full p-4 rounded-b-xl bg-[#111F4D] text-white absolute bottom-0 min-h-[80px] sm:min-h-[140px] gap-2">
                        <h2 className="text-lg font-semibold">Swift Desire</h2>
                        <p className="text-sm md:ml-4">
                          AC | 4 Seater | Manual
                        </p>
                        <p className="text-sm md:ml-4">₹12/km</p>
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
