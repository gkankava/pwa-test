import { apiCall, bareApiCall } from "api";

export function getEvents(params) {
  return apiCall.get(`/mobile/events`, {
    params: {
      longitude: params?.longitude || 9.1778072,
      latitude: params?.latitude || 48.7777359,
      radius: params?.radius || 5,
      orderBy: params?.orderBy || "updated_at",
    },
  });
}

export function getNextEvents(url) {
  return bareApiCall.get(url);
}

export function getEvent(id, coords) {
  return apiCall.get(`/mobile/events/${id}`, { params: coords });
}
