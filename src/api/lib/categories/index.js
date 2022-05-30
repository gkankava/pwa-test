import { apiCall } from "api";
export function getCategories(params) {
  return apiCall.get(`/mobile/categories`, {
    params: {
      longitude: params?.longitude || 9.1778072,
      latitude: params?.latitude || 48.7777359,
      radius: params?.radius || 5,
    },
  });
}
