export type LottieColor = [number, number, number];

const convertColorToRGB = (color: LottieColor): LottieColor => {
  return color.map((channel) => channel / 255) as LottieColor;
};

export default convertColorToRGB;
