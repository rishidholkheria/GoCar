"use client";

import { CabStore } from "@/store";
import React, { useEffect } from "react";

const SelectCab = () => {
  const sourceGeocode = CabStore((state) => state.sourceGeocode);
  const destinationGeocode = CabStore((state) => state.destinationGeocode);

  useEffect(() => {
    console.log(sourceGeocode, "SRC");
    console.log(destinationGeocode, "DESTINATION");
    const getDistance = async () => {
      const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${sourceGeocode[1]},${sourceGeocode[0]};${destinationGeocode[1]},${destinationGeocode[0]}?overview=full&geometries=geojson`
      );
      const resp = await response.json();
      console.log("GEOJSON  ---- ", resp);
    };
    getDistance();
  }, []);

  return <div>Hello</div>;
};

export default SelectCab;
