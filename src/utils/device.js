import device from "current-device";

const getDeviceInfo = () => {
  let obj = {
    type: device.type,
    os: device.os,
  };
  return obj;
};

const isInStandaloneMode = () =>
  "standalone" in window.navigator && window.navigator.standalone;

const isIos = () => getDeviceInfo().os === "ios";

const iosVersion = () => {
  const agent = window.navigator.userAgent;
  const start = agent.indexOf("OS");
  if (
    (agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1) &&
    start > -1
  ) {
    return window.Number(agent.substr(start + 3, 3).replace("_", "."));
  }
  return 0;
};

const hasHomeBar = () => {
  if (isInStandaloneMode() && isIos() && iosVersion() >= 12) {
    return true;
  } else {
    return false;
  }
};

export { getDeviceInfo, isInStandaloneMode, isIos, iosVersion, hasHomeBar };
