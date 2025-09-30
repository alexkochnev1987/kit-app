import React from "react";
import { Station } from "@/types/station";
import { LiveBadge } from "./LiveBadge";
import { PhoneContent } from "./PhoneContent";
import Image from "next/image";

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
  const logoBackgroundColor = station.color
    ? station.color
    : "linear-gradient(180deg, #4F46E5 0%, #453EC9 100%)";

  return (
    <div className={`relative translate-y-[30px] `}>
      {/* Phone frame */}
      <div className="w-[200px] h-[431px] bg-black rounded-[2.5rem] p-2 shadow-2xl overflow-hidden ">
        <Image
          src="/images/phone-screen-dynamic.png"
          alt="Phone screen"
          width={196}
          height={427}
          className="w-full h-full object-cover"
        />
      </div>
      <PhoneContent station={station} />

      {/* Live badge */}
      <LiveBadge logoBackgroundColor={logoBackgroundColor} />
    </div>
  );
};
