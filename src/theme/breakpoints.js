const size = {
  xs: "43em",
  sm: "62em",
  lg: "768px",
  xl: "1024px",
};
const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
};
export default { size, device };
