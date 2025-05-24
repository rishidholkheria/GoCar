import { create } from "zustand";

interface CabStoreInterface {
  sourceGeocode: any;
  destinationGeocode: any;
  changeState: Function;
  source: String;
  destination: String;
  setLocations: Function;
}

export const CabStore = create<CabStoreInterface>((set) => ({
  sourceGeocode: [],
  destinationGeocode: [],
  changeState: (data: any) => {
    console.log(data, "DATA HERE");
    set((state: any) => ({ ...state, ...data }));
  },
  source: "",
  destination: "",
  setLocations: (locations: any) => {
    console.log("REC LOCs ----> ", locations);
    set((state) => ({
      ...state,
      source: locations.source,
      destination: locations.destination,
    }));
  },
}));
