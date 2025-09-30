"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Station } from "@/types/station";
import { getStationById, getAllStations } from "@/utils/stationUtils";
import { Card } from "@/components/PromoCard/Card";

export function HomeContent() {
  const [currentStation, setCurrentStation] = useState<Station | null>(null);
  const [allStations, setAllStations] = useState<Station[]>(getAllStations());
  const searchParams = useSearchParams();

  useEffect(() => {
    // Load all stations
    const stations = getAllStations();
    setAllStations(stations);

    // Check for station ID in URL parameters
    const stationId = searchParams.get("id");
    if (stationId) {
      const station = getStationById(stationId);
      if (station) {
        setCurrentStation(station);
        return;
      }
    }

    // Default to first station if no valid ID in URL
    setCurrentStation(stations[0]);
  }, [searchParams]);

  const handleStationChange = (stationId: number) => {
    const station = getStationById(stationId);
    if (station) {
      setCurrentStation(station);
      // Update URL with station ID
      const url = new URL(window.location.href);
      url.searchParams.set("id", stationId.toString());
      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Promo Card Demo
          </h1>
          <p className="text-gray-600">
            Switch between stations to see different card types
          </p>
        </div>

        {/* Station Selector */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Select Station:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allStations.map((station) => (
              <button
                key={station.id}
                onClick={() => handleStationChange(station.id)}
                className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                  currentStation?.id === station.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <div className="font-medium text-sm text-gray-900 truncate">
                  {station.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {station.color && station.color !== null
                    ? "Dynamic Card"
                    : "Default Card"}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Promo Card Section */}
        {currentStation && (
          <div className="flex justify-center w-full">
            <div className={`hidden lg:block w-full`}>
              <Card station={currentStation} />
            </div>
          </div>
        )}

        {/* Mobile Notice */}
        <div className="md:hidden mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">
            <strong>Note:</strong> Promo cards are hidden on mobile devices as
            per requirements. View on desktop to see the cards.
          </p>
        </div>
      </div>
    </div>
  );
}
