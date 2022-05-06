// export const getCurrentLocationAsync = async () => {
//   let { status } = await Location.requestForegroundPermissionsAsync();
//   if (status !== "granted") return;
//   return Location.getCurrentPositionAsync({});
// };

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   return pos.coords;
// }

// function errors(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// export const getCurrentLocationAsync = async () => {
//   if (navigator.geolocation) {
//     let { state } = await navigator.permissions.query({ name: "geolocation" });

//     if (state === "granted") {
//       window.alert("here");
//       return navigator.geolocation.getCurrentPosition(success, null, options);
//     } else if (state === "prompt") {
//       return navigator.geolocation.getCurrentPosition(success, errors, options);
//     } else if (state === "denied") {
//       //If denied then you have to show instructions to enable location
//     }
//   } else {
//     // not supported
//   }
// };

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
