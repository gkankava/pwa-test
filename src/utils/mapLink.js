import { isInStandaloneMode } from "./device";

export const showLocation = (coords) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}&travelmode=car`;
  if (isInStandaloneMode()) {
    const win = window.open(url, "_top");
    win.focus();
  } else {
    window.open(url, "_blank");
  }
};
