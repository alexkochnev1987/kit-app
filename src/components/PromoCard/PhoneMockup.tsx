import React from "react";
import { Station } from "@/types/station";
import { LiveBadge } from "./LiveBadge";

interface PhoneMockupProps {
  station: Station;
  className?: string;
}

/**
 * Phone mockup component that displays station logo and background
 * Background color changes based on station type (Default: black, Dynamic: station color)
 */
export const PhoneMockup: React.FC<PhoneMockupProps> = ({ station }) => {
  // Background color for logo area
  const logoBackgroundColor = station.color ? station.color : "#000000";

  return (
    <div className={`relative `}>
      {/* Phone frame */}
      <div className="w-48 h-96 bg-black rounded-[2.5rem] p-2 shadow-2xl">
        {/* Phone screen */}
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-2 text-black text-sm font-medium">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 bg-black rounded-sm"></div>
              <div className="w-4 h-2 bg-black rounded-sm"></div>
              <div className="w-6 h-3 bg-black rounded-sm"></div>
            </div>
          </div>

          {/* Navigation icons */}
          <div className="flex justify-between items-center px-6 py-2">
            <div className="flex space-x-4">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>

          {/* Main content area with station logo */}
          <div className="flex-1 flex items-center justify-center px-6">
            <div
              className="w-full h-32 rounded-2xl flex items-center justify-center relative"
              style={{ backgroundColor: logoBackgroundColor }}
            >
              {/* Station logo/name */}
              <div className="text-center">
                <div className="text-white font-bold text-lg">
                  {station.title}
                </div>
              </div>
            </div>
          </div>

          {/* Player controls */}
          <div className="absolute bottom-8 left-0 right-0 px-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-12 h-12 bg-red-500 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Live badge */}
      <LiveBadge logoBackgroundColor={logoBackgroundColor} />
    </div>
  );
};
