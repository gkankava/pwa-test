import { apiCall, bareApiCall } from "api";

export function getNewsList(params) {
  return apiCall.get(`/mobile/news`, {
    params,
  });
}

export function getNextNews(url) {
  return bareApiCall.get(url);
}

export function getNews(id, coords) {
  return apiCall.get(`/mobile/news/${id}`, { params: coords });
}

export function getFavouriteNewsList() {
  return apiCall.get(`/mobile/favorite/news`);
}
