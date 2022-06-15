import { bareApiCall, apiCall } from "api";

export function getLocations(params) {
  return apiCall.get(`/mobile/locations`, {
    params: {
      ...params,
      locationGallery: true,
      businessOpeningHours: true,
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

export function getFavoriteLocations(params) {
  return apiCall.get(`/mobile/subscribe`, {
    params: {
      ...params,
      locationGallery: true,
    },
  });
}
