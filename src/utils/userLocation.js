export const getLocationService = () => {
  const timeout = 5000;
  const enableHighAccuracy = true;
  const maximumAge = 0;
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      return reject(new Error("Geolocation is not supported!"));
    }

    /*
     * Resolve on success
     */
    const geoSuccess = (position) => {
      if (process.env.NODE_ENV === "development") {
        console.log("Watching");
        console.log(position);
      }
      return resolve(position);
    };

    /*
     * Reject on error [no permission or ...]
     */
    const geoError = (error) => {
      return reject(new Error(`Error occurred. Error code: ${error.code}`));
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
      ...enableHighAccuracy,
      timeout,
      maximumAge,
    });
  });
};
