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
  const [mapRoute, setMapRoute] = useState<any[]>([]);

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
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [0, -60],
  });

  const destinationIcon = L.icon({
    iconUrl: "/assets/location-icon.png",
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [0, -60],
  });

  const getReverseResp = (resp: any) => {
    const res = resp.routes[0].geometry.coordinates;
    setMapRoute(res.map(([long, lat]: [number, number]) => [lat, long]));
  };

  useEffect(() => {
    const getDistance = async () => {
      if (!sourceGeocode || !destinationGeocode) return;
      const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${sourceGeocode[1]},${sourceGeocode[0]};${destinationGeocode[1]},${destinationGeocode[0]}?overview=full&geometries=geojson`
      );
      const resp = await response.json();
      getReverseResp(resp);
    };
    getDistance();
  }, [sourceGeocode, destinationGeocode]);

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="order-2 md:order-1 w-full md:w-1/3 h-[60vh] md:h-full overflow-y-scroll scrollbar-hide bg-white">
        {/* Header */}
        <div className="fixed md:static w-full h-[70px] flex justify-between items-center bg-[#151001] px-6 md:px-4 text-white z-10 shadow-md">
          <div className="flex items-center gap-3">
            <img src="/favicon.ico" alt="Logo" className="w-[45px] h-[45px]" />
            <p className="text-lg font-bold tracking-wide">GOCCAR</p>
          </div>
          <a href="tel:+7087079696">
            <button className="bg-white text-blue-950 px-4 py-1 text-sm font-medium rounded-2xl hover:bg-blue-100 transition">
              Call Us
            </button>
          </a>
        </div>

        {/* Booking Section */}
        <div className="mt-[80px] md:mt-[12px] mx-4 border border-[#ffdb97] rounded-2xl px-5 py-6 shadow-sm">
          <p className="text-sm font-semibold text-[#151001] mb-4">
            Step 1 of 4 <span className="font-bold">Booking details</span>
          </p>

          {/* Source + Destination */}
          <div className="flex flex-col gap-5 relative">
            {/* Source */}
            <div className="flex items-start gap-3">
              <div className="mt-[6px] w-3 h-3 rounded-full bg-[#ff6a00] z-10"></div>
              <div>
                <p className="text-xs text-gray-500">Pickup</p>
                <p className="text-base font-bold text-[#151001]">{source}</p>
              </div>
            </div>

            {/* Connecting line */}
            <div className="absolute left-[5px] top-[18px] h-[65px] w-[1px] bg-gray-300 z-0"></div>

            {/* Destination */}
            <div className="flex items-start gap-3">
              <div className="mt-[6px] w-3 h-3 rounded-full border-2 border-[#151001] bg-white z-10"></div>
              <div>
                <p className="text-xs text-gray-500">
                  Destination
                </p>
                <p className="text-base font-bold text-[#151001]">
                  {destination}
                </p>
              </div>
            </div>
          </div>

          {/* Booking Time Options */}
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
              </div>
              <p className="text-sm font-semibold text-[#151001]">
                Book for now
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
              <p className="text-sm font-semibold text-[#151001]">
                Book for later
              </p>
            </div>
          </div>

          {/* Fixed Price Banner */}
          <div className="mt-6 px-4 py-3 bg-white rounded-xl border border-[#ffdb97] shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-bold text-sm">
                  🔒 Fixed Price
                </span>
              </div>
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                ✓
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Lock in a price with no additional charges.
            </p>
          </div>
        </div>

        {/* Date + Distance + Cabs */}
        <div className="px-4 py-6">
          <div className="mb-4">
            <h2 className="text-[#15100197] text-base md:text-lg font-bold">
              18 June, 2025 - 7:30 am
            </h2>
            <h2 className="text-[#15100197] text-base md:text-lg font-bold">
              201 KM journey
            </h2>
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
            Select from our Fleet
          </h2>

          {[...Array(7)].map((_, i) => (
            <CabDetailLayout key={i} />
          ))}
        </div>
      </div>

      {/* Map section */}
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
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />

          {sourceGeocode && (
            <Marker position={sourceGeocode} icon={sourceIcon}>
              <Popup>Source Location</Popup>
            </Marker>
          )}
          {destinationGeocode && (
            <Marker position={destinationGeocode} icon={destinationIcon}>
              <Popup>Destination Location</Popup>
            </Marker>
          )}
          {mapRoute.length > 0 && (
            <Polyline
              positions={mapRoute}
              pathOptions={{ color: "#2c3e50", weight: 4, opacity: 1 }}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default SelectCab;
