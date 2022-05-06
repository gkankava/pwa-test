import { apiCall, bareApiCall } from "api";

export function getCouponsByNews(id) {
  return apiCall.get(`/mobile/coupons?news=${id}`);
}

export function getNextCoupons(url) {
  return bareApiCall.get(url);
}
