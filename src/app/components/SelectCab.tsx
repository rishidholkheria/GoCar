"use client";

import { CabStore } from "@/store";
import React, { useEffect, useState } from "react";
import CabDetailLayout from "../components/CabDetailLayout";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";

const SelectCab = () => {
  const sourceGeocode = CabStore((state) => state.sourceGeocode);
  const destinationGeocode = CabStore((state) => state.destinationGeocode);
  const source = CabStore((state) => state.source);
  const destination = CabStore((state) => state.destination);
  const [mapRoute, setMapRoute] = useState([]);

  const FitBounds = ({ bounds }: { bounds: any[] }) => {
    const map = useMap();
    useEffect(() => {
      if (bounds && bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }, [bounds, map]);
    return null;
  };

  const sourceIcon = L.icon({
    iconUrl: "/assets/location-icon.png",
    iconSize: [60, 60], // icon is 60px wide and 60px tall
    iconAnchor: [30, 60], // point at bottom center of icon (x = 60/2, y = 60)
    popupAnchor: [0, -60], // popup opens directly above the icon
  });

  const destinationIcon = L.icon({
    iconUrl: "/assets/location-icon.png",
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [0, -60],
  });

  const getReverseResp = (resp: any) => {
    const res = resp.routes[0].geometry.coordinates;
    setMapRoute(
      res.map(([long, lat]: [Float32Array, Float32Array]) => [lat, long])
    );
  };

  useEffect(() => {
    const getDistance = async () => {
      //longitude,Lattitude
      const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${sourceGeocode[1]},${sourceGeocode[0]};${destinationGeocode[1]},${destinationGeocode[0]}?overview=full&geometries=geojson`
      );
      const resp = await response.json();
      getReverseResp(resp);
    };
    getDistance();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="order-2 md:order-1 w-full md:w-1/3 h-[60vh] md:h-full overflow-y-scroll scrollbar-hide">
        <div className="fixed md:static w-full h-[70px] flex justify-start items-center bg-[#151001] p-8 md:p-3 text-white z-10">
          <img src="/favicon.ico" alt="" className="w-[50px] h-[50px]" />
          <p className="pl-3">GOCCAR</p>
          <a href="tel:+7087079696">
            <button className="bg-white ml-[40px] px-4 py-1 text-blue-950 rounded-3xl cursor-pointer">
              Call Us
            </button>
          </a>
        </div>

        {/* From - To Info */}
        <div className="mt-[90px] md:mt-[10px] mx-4 bg-[#fdf0d8] border-2 border-[#ffdb97] rounded-2xl px-5 py-3 flex justify-center items-center">
          <div className="w-4/5">
            <h2 className="font-bold text-xl py-2">
              <span className="font-bold text-gray-500 text-[16px] mr-1">
                From:
              </span>
              {source}
            </h2>
            <h2 className="font-bold text-xl py-2 border-t-2 border-gray-300">
              <span className="font-bold text-gray-500 text-[16px] mr-3">
                To:
              </span>
              {destination}
            </h2>
          </div>
          <div className="w-1/5 flex items-center">
            <button className="bg-[#151001] px-4 py-2 rounded-md mx-auto text-white cursor-pointer">
              Edit
            </button>
          </div>
        </div>
        <div className="px-4 py-6">
          <div className="py-1 px-2">
            {/* <div className="flex items-center bg-amber-600 p-1 rounded-lg">
              <FontAwesomeIcon icon={faRoad} />
              <p className="pl-1 text-white text-md font-bold">1992.8 Km</p>
            </div> */}
            <h2 className=" text-[#15100197] text-xl font-bold">
              18 June, 2025 - 7:30 am
            </h2>
            <h2 className=" text-[#15100197] text-xl font-bold">
              201 KM journey
            </h2>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 py-2">
            Select from our Fleet
          </h2>
          {[...Array(7)].map((_, i) => (
            <CabDetailLayout key={i} />
          ))}
        </div>
      </div>

      {/* Map (right on md+, top on sm) */}
      <div className="order-1 md:order-2 w-full md:w-2/3 h-[40vh] md:h-screen overflow-hidden">
        <MapContainer
          center={sourceGeocode || [51.505, -0.09]}
          zoom={11}
          style={{ height: "100%", width: "100%" }}
          whenCreated={(map) => {
            setTimeout(() => {
              map.invalidateSize();
            }, 100);
          }}
        >
          <FitBounds bounds={mapRoute} />
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />
          <Marker position={sourceGeocode} icon={sourceIcon}>
            <Popup>Source Location</Popup>
          </Marker>
          <Marker position={destinationGeocode} icon={destinationIcon}>
            <Popup>Destination Location</Popup>
          </Marker>
          {mapRoute.length > 0 && (
            <Polyline
              positions={mapRoute}
              pathOptions={{ color: "#FFBF00", weight: 6, opacity: 1 }}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default SelectCab;
