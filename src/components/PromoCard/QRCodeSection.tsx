import React from "react";
import { AppStoreButton } from "./AppStoreButton";

interface QRCodeSectionProps {
  isDynamic: boolean;
  className?: string;
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({
  isDynamic,
  className = "",
}) => {
  return (
    <div
      className={`flex xl:flex-row flex-col xxl:flex-row items-center pr-4 md:pr-8 lg:pr-12 xl:pr-16`}
      style={{ gap: "24px" }}
    >
      <div className="relative">
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm flex items-center justify-center w-[108px] h-[108px]">
          <img
            src="/images/qr-code.png"
            alt="QR Code"
            className="object-cover rounded"
            style={{ width: "96px", height: "96px" }}
          />
        </div>
      </div>

      <div className="flex flex-col" style={{ gap: "9px" }}>
        <AppStoreButton
          icon="apple-icon"
          topText="Download on the"
          bottomText="App Store"
        />

        <AppStoreButton
          icon={"google"}
          topText="GET IT ON"
          bottomText="Google Play"
        />
      </div>
    </div>
  );
};
