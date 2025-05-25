"use client";

import React, { useCallback, useState } from "react";
import ResizableNavbar from "../components/ResizableNavbar";
import { TypewriterEffectDemo } from "../components/TypewriterEffect";
import { useRouter } from "next/navigation";
import { CabStore } from "@/store";
import debounce from "lodash.debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

const HeroSection = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const changeState = CabStore((state) => state.changeState);
  const setLocations = CabStore((state) => state.setLocations);

  const router = useRouter();

  const getGeoCodes = async (place: String) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          place
        )}`
      );
      const resp = await response.json();
      console.log("response : ", resp);

      if (resp && resp[0]) {
        return [parseFloat(resp[0].lat), parseFloat(resp[0].lon)];
      }
    } catch (e) {
      console.log("Error :", e);
    }
  };

  const fetchSuggestions = async (
    query: string,
    type: "source" | "destination"
  ) => {
    if (!query) {
      if (type === "source") setSourceSuggestions([]);
      else setDestinationSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}&addressdetails=1&limit=5&countrycodes=in`
      );
      const data = await res.json();
      const suggestions = data.map((item: any) => item.display_name);
      if (type === "source") setSourceSuggestions(suggestions);
      else setDestinationSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debouncedFetchSource = useCallback(
    debounce((query: any) => fetchSuggestions(query, "source"), 300),
    []
  );
  const debouncedFetchDestination = useCallback(
    debounce((query: any) => fetchSuggestions(query, "destination"), 300),
    []
  );

  const handleSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSource(e.target.value);
    debouncedFetchSource(e.target.value);
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
    debouncedFetchDestination(e.target.value);
  };

  const handleSearch = async () => {
    if (source === "" || destination === "") {
      toast.error("Enter pickup and drop points", {
        position: "top-right",
      });
      console.log("Empty");
    } else {
      try {
        const geoCode1 = await getGeoCodes(source);
        const geoCode2 = await getGeoCodes(destination);
        // console.log("G1 --- ", geoCode1);
        // console.log("G2 ---", geoCode2);
        setLocations({ source, destination });
        changeState({ sourceGeocode: geoCode1, destinationGeocode: geoCode2 });
        router.push("/select-cab");
      } catch (e) {
        toast(`Error occurred : ${e}`);
      }
    }
  };

  return (
    <div className="w-full h-screen px-4 flex flex-col items-center">
      <Toaster />
      <ResizableNavbar />
      <div className="absolute">
        <TypewriterEffectDemo />
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-10 mx-2 text-black backdrop-opacity-75 w-[98vw] h-[90vh] rounded-b-2xl object-cover z-[-1]"
      >
        <source src="/assets/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mx-auto absolute bottom-[-15vh] md:bottom-0 left-0 right-0 bg-white w-5/6 md:w-3/4 min-h-[115px] flex flex-col md:flex-row justify-center items-center rounded-2xl shadow-[#D9D9D9] p-4 gap-4 md:gap-0">
        <div className="px-4 w-full md:w-1/4">
          <p className="text-gray-900 font-bold text-sm">From</p>
          <input
            onChange={handleSourceChange}
            value={source}
            type="text"
            placeholder="Pickup Point"
            className="text-2xl outline-none py-2 capitalize w-full overflow-hidden text-ellipsis whitespace-nowrap"
          />
          <ul className="bg-white absolute z-10 w-full">
            {sourceSuggestions.map((item, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setSource(item);
                  setSourceSuggestions([]);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 w-full md:w-1/4">
          <p className="text-gray-900 font-bold text-sm">To</p>
          <input
            onChange={handleDestinationChange}
            value={destination}
            type="text"
            placeholder="Drop Point"
            className="text-2xl outline-none py-2 capitalize w-full overflow-hidden text-ellipsis whitespace-nowrap"
          />
          <ul className="bg-white absolute z-10 w-full">
            {destinationSuggestions.map((item, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setDestination(item);
                  setDestinationSuggestions([]);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 w-full md:w-1/4">
          <p className="text-gray-900 font-bold text-sm">Pick-Up Date & Time</p>
          <input
            type="text"
            placeholder="18 May 2025, 1:00 PM"
            className="text-2xl outline-none py-2 capitalize w-full"
          />
        </div>

        <div className="w-full md:w-1/4 flex justify-center">
          <button
            onClick={handleSearch}
            className="rounded-[300px] bg-[#E43A19] w-full md:w-1/3 p-3 text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
