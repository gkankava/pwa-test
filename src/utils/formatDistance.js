export const formatDistance = (d) => {
  if (d < 1) {
    return `${Math.ceil(d * 1000)} m`;
  } else {
    return `${Math.round(d)} km`;
  }
};
