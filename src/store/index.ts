import { create } from "zustand";

interface CabStoreInterface {
  sourceGeocode: any;
  destinationGeocode: any;
  changeState: Function;
}

export const CabStore = create<CabStoreInterface>((set) => ({
  sourceGeocode: [],
  destinationGeocode: [],
  changeState: (data: any) => {
    console.log(data, "DATA HERE")
    set((state: any) => ({ ...state, ...data }));
  },
}));


