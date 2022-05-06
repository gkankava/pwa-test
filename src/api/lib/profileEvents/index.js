import { apiCall } from "api";

export const subscribeAsync = (id) => {
  return apiCall.post(`/mobile/subscribe`, { location_id: id });
};

export const unSubscribeAsync = (id) => {
  return apiCall.delete(`/mobile/subscribe/${id}`);
};

export const likeAsync = (refer, id) => {
  return apiCall.post(`/mobile/favorite/${refer}/${id}`);
};

export const unLikeAsync = (refer, id) => {
  return apiCall.delete(`/mobile/favorite/${refer}/${id}`);
};
