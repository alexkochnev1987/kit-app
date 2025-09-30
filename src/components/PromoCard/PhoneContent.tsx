import React from "react";
import { Station } from "@/types/station";
import Image from "next/image";

interface PhoneContentProps {
  station: Station;
  className?: string;
}

/**
 * PhoneContent component - displays the content inside the phone
 * Contains the station logo area with title
 */
export const PhoneContent: React.FC<PhoneContentProps> = ({ station }) => {
  return (
    <div className="absolute top-[68px] w-full">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {/* Station logo/name */}
          <div className="text-center w-full max-w-[170px] pb-3">
            <p className="font-assistant font-semibold text-base leading-6 text-center align-middle text-white truncate">
              {station.title}
            </p>
          </div>
          <div className="w-[117px] h-[117px] ">
            <Image
              src={station.logo}
              alt="Phone screen"
              width={117}
              height={117}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
