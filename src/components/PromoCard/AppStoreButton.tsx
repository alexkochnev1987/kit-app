import React from "react";

interface AppStoreButtonProps {
  icon: string;
  topText: string;
  bottomText: string;
  className?: string;
}

/**
 * App Store button component with customizable icon and text
 */
export const AppStoreButton: React.FC<AppStoreButtonProps> = ({
  icon,
  topText,
  bottomText,
  className = "",
}) => {
  return (
    <button
      className={`flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors w-full ${className}`}
    >
      <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
        <span className="text-black text-xs font-bold">{icon}</span>
      </div>
      <div className="text-left">
        <div className="text-xs">{topText}</div>
        <div className="text-sm font-semibold">{bottomText}</div>
      </div>
    </button>
  );
};
