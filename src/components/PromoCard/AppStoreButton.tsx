import React from "react";
import Icon from "../Icons/Icon";

interface AppStoreButtonProps {
  icon: string;
  topText: string;
  bottomText: string;
  className?: string;
}

/**
 * App Store button component with customizable icon and text
 * Matches Figma design for App Store and Google Play buttons
 */
export const AppStoreButton: React.FC<AppStoreButtonProps> = ({
  icon,
  topText,
  bottomText,
  className = "",
}) => {
  return (
    <button
      className={`flex items-center bg-[#212121] text-white rounded-lg hover:bg-[#333333] transition-colors ${className}`}
      style={{ width: "162px", height: "48px", padding: "0 15px", gap: "12px" }}
    >
      <div
        className="flex items-center justify-center"
        style={{ width: "24px", height: "24px" }}
      >
        <Icon iconName={icon} width={24} height={24} />
      </div>
      <div className="text-left">
        <div className="text-xs text-white/80">{topText}</div>
        <div className="text-sm font-semibold text-white">{bottomText}</div>
      </div>
    </button>
  );
};
