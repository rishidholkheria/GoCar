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
    <div className="w-full mt-5">
      <Carousel className="w-full flex flex-col justify-between p-2 box-border overflow-hidden">
        <CarouselContent className="mx-2 bg-white p-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 flex"
            >
              <div className="flex flex-col w-full rounded-2xl relative bg-white shadow-md">
                <Card className="p-0">
                  <CardContent className="p-0">
                    <div className="w-full relative flex flex-col">
                      
                      <img
                        src="/assets/carEx1.png"
                        alt="Taxi_Img"
                        className="w-full object-cover min-h-[180px] max-h-[220px] md:max-h-[250px] rounded-t-2xl"
                      />

                      <button className="absolute bottom-10 right-4 m-2 rounded-full p-3 bg-[#FFBF00] z-10">
                        FAB
                      </button>

                      <div className="flex flex-col md:flex-row w-full p-4 rounded-b-xl bg-[#151001] text-white min-h-[140px] md:min-h-[80px] gap-2">
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
