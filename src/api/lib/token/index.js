import { apiCall } from "api";

export function sendFCMToken(data) {
  return apiCall.post(`/mobile/pushNotifications/fcm`, data);
}
