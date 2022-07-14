import { sendFCMToken } from "api/lib/token";

export const FCMSlice = (set, get) => ({
  storeToken: async (data) => {
    sendFCMToken(data)
      .then(() => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err.response));
  },
});
