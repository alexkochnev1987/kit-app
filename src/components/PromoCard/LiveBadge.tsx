import React from "react";
import Image from "next/image";

interface LiveBadgeProps {
  logoBackgroundColor: string;
  className?: string;
}

/**
 * Live badge component with customizable background color
 */
export const LiveBadge: React.FC<LiveBadgeProps> = ({
  logoBackgroundColor,
}) => {
  return (
    <div
      className={`absolute rounded-lg  w-[88px] h-[88px] flex flex-col items-center justify-center gap-[2px] top-[166px] right-[-67px]`}
      style={{
        background: logoBackgroundColor,
      }}
    >
      <Image
        src="/images/live.png"
        alt="Live"
        width={47}
        height={36}
        className="w-[47px] h-[36px]"
      />
      <Image
        src="/images/r-letter.png"
        alt="Live"
        width={47}
        height={14}
        className="w-[47px] h-[14px]"
      />
    </div>
  );
};
