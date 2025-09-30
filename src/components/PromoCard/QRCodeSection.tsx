import React from "react";
import { AppStoreButton } from "./AppStoreButton";

interface QRCodeSectionProps {
  className?: string;
}

/**
 * QR Code section with app store download buttons
 * Matches the Figma design with QR code and store buttons
 */
export const QRCodeSection: React.FC<QRCodeSectionProps> = ({
  className = "",
}) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* QR Code */}
      <div className="relative">
        <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center">
          {/* QR Code pattern - simplified representation */}
          <div className="grid grid-cols-8 gap-0.5 w-20 h-20">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 ${
                  Math.random() > 0.5 ? "bg-white" : "bg-black"
                }`}
              />
            ))}
          </div>
        </div>
        {/* R Live icon in center of QR code */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">R</span>
          </div>
        </div>
      </div>

      {/* App Store Buttons */}
      <div className="space-y-2">
        {/* App Store Button */}
        <AppStoreButton
          icon="🍎"
          topText="Download on the"
          bottomText="App Store"
        />

        {/* Google Play Button */}
        <AppStoreButton icon="▶" topText="GET IT ON" bottomText="Google Play" />
      </div>
    </div>
  );
};
