import { apiCall } from "api";

export function getGallery(id) {
  return apiCall.get(`/mobile/gallery/${id}`);
}
