import { bareApiCall, apiCall } from "api";

export function getLocations(params) {
  return apiCall.get(`/mobile/locations`, {
    params: {
      longitude: params?.longitude || 9.1778072,
      latitude: params?.latitude || 48.7777359,
      radius: params?.radius || 5,
      orderBy: params?.orderBy || "updated_at",
      locationGallery: true,
    },
  });
}

export function getNextLocations(url) {
  return bareApiCall.get(url);
}

export function getLocation(id) {
  return apiCall.get(`/mobile/locations/${id}`);
}

export function getOffers(id) {
  return apiCall.get(`/mobile/offers?location=${id}&news=true&events=true`);
}
