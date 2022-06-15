import { apiCall, bareApiCall } from "api";

export function getEvents(params) {
  return apiCall.get(`/mobile/events`, {
    params,
  });
}

export function getNextEvents(url) {
  return bareApiCall.get(url);
}

export function getEvent(id, coords) {
  return apiCall.get(`/mobile/events/${id}`, { params: coords });
}

export function getFavouriteEvents() {
  return apiCall.get(`/mobile/favorite/events`);
}
