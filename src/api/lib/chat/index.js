import { apiCall } from "api";

export const getConversations = () => {
  return apiCall.get(`/mobile/chats`);
};
export const createConversation = (data) => {
  return apiCall.post(`/mobile/chats`, data);
};
export const getMessages = (chatId, companyId) => {
  return apiCall.get(
    `/mobile/chats/${chatId}/messages?company_id=${companyId}`
  );
};
export const chatReveal = (chatId, companyId) => {
  return apiCall.get(
    `/mobile/chats/${chatId}/users/reveal?company_id=${companyId}`
  );
};
export const sendMessage = (chatId, data) => {
  return apiCall.post(`/mobile/chats/${chatId}/messages`, data);
};

export const fetchNext = (url, params) => {
  return apiCall.get(url, { params });
};

export const uploadMedia = (formData) => {
  return apiCall.post("/mobile/upload/image?full_url=true", formData, {
    headers: {
      "Image-Type": "image",
    },
  });
};
