import { apiCall } from "api";

export function getSearch(query, keywords) {
  return apiCall.get(`/mobile/search?query=${query}&keywords=${keywords}`);
}

export function getNextSearch(url) {
  return apiCall.get(url);
}
