import { apiCall, bareApiCall } from "api";

export function getNewsList(params) {
  return apiCall.get(`/mobile/news`, {
    params: {
      longitude: params?.longitude || 9.1778072,
      latitude: params?.latitude || 48.7777359,
      radius: params?.radius || 5,
      orderBy: params?.orderBy || "updated_at",
    },
  });
}

export function getNextNews(url) {
  return bareApiCall.get(url);
}

export function getNews(id, coords) {
  return apiCall.get(`/mobile/news/${id}`, { params: coords });
}
