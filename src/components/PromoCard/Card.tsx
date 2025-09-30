import React from "react";
import { CardProps } from "@/types/station";
import { PhoneMockup } from "./PhoneMockup";
import { QRCodeSection } from "./QRCodeSection";
import Link from "next/link";

/**
 * Card component - conditionally renders Default or Dynamic styles based on station.color
 * Default: station.color is null (black logo background)
 * Dynamic: station.color has value (colored logo background)
 */
export const Card: React.FC<CardProps> = ({ station }) => {
  const isDynamic = station.color && station.color !== null;

  return (
    <div className="relative overflow-hidden pt-10">
      <div className="bg-[#DBEAFE] border border-[#BFDBFE] rounded-2xl  p-12 w-full h-[312px] w-full">
        <div className="flex items-center h-full">
          <QRCodeSection isDynamic={!!isDynamic} />

          {/* Center - Phone mockup with station color */}
          <PhoneMockup station={station} />

          {/* Right side - Text content - Figma: width 459px, gap 16px */}
          <div className="flex  flex-1 flex-col justify-center items-end gap-4 pl-20">
            <h4
              className=" text-3xl font-bold text-[#1D4ED8] leading-tight text-right"
              style={{ fontFamily: "var(--font-assistant)" }}
            >
              Continue listening through the app
            </h4>
            <p
              className="text-[#111827] text-base leading-6 text-right"
              style={{ fontFamily: "var(--font-assistant)" }}
            >
              {station.title} broadcasts are available on our mobile app.
              Listening to the live broadcast provides an immediate solution
              anywhere and in any situation.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-[#111827] text-base font-semibold hover:underline"
              style={{ fontFamily: "var(--font-assistant)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              More information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
