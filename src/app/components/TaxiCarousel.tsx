import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TaxiCarousel = () => {
  const cars = [
    {
      carName: "Sedan",
      passengers: "1-4 Passengers",
      desc: "Comfortable, smooth ride",
      detail: "Great for city trips and long drives",
      carImg: "/assets/taxi-icon1.png",
      descIcon: "/assets/taxi-desc-icon1.png",
    },
    {
      carName: "SUV",
      passengers: "1-6 Passengers",
      desc: "Ideal for families or groups",
      detail: "Perfect for extra luggage and off-road trips",
      carImg: "/assets/taxi-icon3.png",
      descIcon: "/assets/taxi-desc-icon2.png",
    },
    {
      carName: "Hatchback",
      passengers: "1-4 Passengers",
      desc: "Compact, easy to park",
      detail: "Best for city rides and short distances.",
      carImg: "/assets/taxi-icon2.png",
      descIcon: "/assets/taxi-desc-icon3.png",
    },
    {
      carName: "Mininvan",
      passengers: "1-7 Passengers",
      desc: "Extra roomy, flexible seating",
      detail: "Great for big groups or lots of luggage",
      carImg: "/assets/taxi-icon8.png",
      descIcon: "/assets/taxi-desc-icon4.png",
    },
    // {
    //   carName: "Hatchback",
    //   passengers: "1-4 Passengers",
    //   desc: "Compact",
    //   detail: "Petrol",
    //   carImg: "/assets/taxi-icon5.png",
    //   descIcon: "/assets/taxi-desc-icon5.png",
    // },
    // {
    //   carName: "Luxury Sedan",
    //   passengers: "1-4 Passengers",
    //   desc: "Premium Comfort",
    //   detail: "Hybrid",
    //   carImg: "/assets/taxi-icon6.png",
    //   descIcon: "/assets/taxi-desc-icon6.png",
    // },
    // {
    //   carName: "Van",
    //   passengers: "1-8 Passengers",
    //   desc: "Utility",
    //   detail: "Diesel",
    //   carImg: "/assets/taxi-icon7.png",
    //   descIcon: "/assets/taxi-desc-icon7.png",
    // },
    // {
    //   carName: "Mini SUV",
    //   passengers: "1-5 Passengers",
    //   desc: "Stylish",
    //   detail: "Petrol",
    //   carImg: "/assets/taxi-icon8.png",
    //   descIcon: "/assets/taxi-desc-icon8.png",
    // },
    // {
    //   carName: "Electric",
    //   passengers: "1-4 Passengers",
    //   desc: "Zero Emission",
    //   detail: "Electric",
    //   carImg: "/assets/taxi-icon9.png",
    //   descIcon: "/assets/taxi-desc-icon9.png",
    // },
  ];

  return (
    <div className="w-full mt-5">
      <Carousel className="w-full flex flex-col justify-between p-2 box-border overflow-hidden">
        <CarouselContent className="mx-2 bg-white p-0">
          {cars.map((car, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4 flex"
            >
              <div className="flex flex-col w-full rounded-2xl relative bg-white shadow-md">
                <Card className="p-0">
                  <CardContent className="p-0">
                    <div className="w-full relative flex flex-col justify-center items-center p-2 text-gray-700">
                      <h2 className="text-[20px] font-bold">{car.carName}</h2>
                      <p className="text-sm md:ml-4 text-[#FFBF00] font-bold">
                        {car.passengers}
                      </p>
                      <img
                        src={car.carImg}
                        alt={car.carName}
                        className="w-full object-cover min-h-[180px] max-h-[220px] md:max-h-[250px] rounded-t-2xl"
                      />
                      <div className="text-center">
                        <p className="text-md font-semibold">{car.desc}</p>
                        <p className="text-sm">{car.detail}</p>
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
