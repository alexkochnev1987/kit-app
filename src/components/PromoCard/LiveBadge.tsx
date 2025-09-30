import React from "react";

interface LiveBadgeProps {
  logoBackgroundColor: string;
  className?: string;
}

/**
 * Live badge component with customizable background color
 */
export const LiveBadge: React.FC<LiveBadgeProps> = ({
  logoBackgroundColor,
  className = "",
}) => {
  return (
    <div
      className={`absolute -top-2 -right-2 text-white px-3 py-1 rounded-full text-xs font-medium ${className}`}
      style={{ backgroundColor: logoBackgroundColor }}
    >
      R Live
    </div>
  );
};
