import { apiCall } from "api";

export const authRegister = (data) => {
  return apiCall.post(`/mobile/auth/register`, data);
};

export const authLogin = (data) => {
  return apiCall.post(`/mobile/auth/login`, data);
};

export const authLogout = () => {
  return apiCall.post(`/mobile/auth/logout`);
};

export const authUpdate = (params) => {
  return apiCall.put(`/mobile/auth/update`, params);
};
