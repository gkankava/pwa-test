export const getTimeZoneOffset = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
