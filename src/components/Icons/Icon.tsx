import Image from "next/image";

export default function Icon({
  iconName,
  width = 24,
  height = 24,
}: {
  iconName: string;
  width?: number;
  height?: number;
}) {
  const iconSrc = `/images/${iconName}.svg`;
  return <Image src={iconSrc} alt={iconName} width={width} height={height} />;
}
