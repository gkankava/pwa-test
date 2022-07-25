import { apiCall } from "api";

export function getFacebookToken() {
  return apiCall.get(`/mobile/login/facebook`);
}

export function loginFacebook(code) {
  return apiCall.get(`/mobile/login/facebook/callback?code=${code}`);
}

export function getGoogleToken() {
  return apiCall.get(`/mobile/login/google`);
}

export function loginGoogle(code) {
  return apiCall.get(`/mobile/login/google/callback?code=${code}`);
}
