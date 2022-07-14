import { apiCall } from "api";
export function getCategories(params) {
  return apiCall.get(`/mobile/categories`, {
    params: {
      longitude: params?.longitude || 8.385653,
      latitude: params?.latitude || 49.010826,
      radius: params?.radius || 10,
    },
  });
}
