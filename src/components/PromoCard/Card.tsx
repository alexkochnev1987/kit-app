import React from "react";
import { CardProps } from "@/types/station";
import { PhoneMockup } from "./PhoneMockup";
import { QRCodeSection } from "./QRCodeSection";

/**
 * Card component - displayed when station has a color value
 * Matches Figma design with light blue-gray background and colored phone mockup
 */
export const Card: React.FC<CardProps> = ({ station }) => {
  return (
    <div className={`bg-blue-50 rounded-2xl p-8 shadow-lg `}>
      {/* Main content */}
      <div className="flex items-center space-x-8">
        {/* Left side - QR Code and buttons */}
        <QRCodeSection />

        {/* Center - Phone mockup with station color */}
        <PhoneMockup station={station} />

        {/* Right side - Text content */}
        <div className="flex-1 max-w-sm">
          <h4 className="text-lg font-bold text-blue-600 mb-4">
            Continue listening through the app
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {station.title} broadcasts are available on our mobile app.
            Listening to the live broadcast provides an immediate solution
            anywhere and in any situation.
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            &lt; More information
          </a>
        </div>
      </div>
    </div>
  );
};
