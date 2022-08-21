import { apiCall } from "api";

export function getSuggestedKeywords(query) {
  return apiCall.get(
    `/mobile/keywords?longitude=8.385653&latitude=49.010826&radius=10`
  );
}

export function getNextSuggestedKeywords(url) {
  return apiCall.get(url);
}
