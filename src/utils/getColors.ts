const getColor = (color: string): string => {
  return color === "red"
    ? "text-pantone-red"
    : color === "green"
    ? "text-pantone-green"
    : "text-pantone-blue";
};

export default getColor;
