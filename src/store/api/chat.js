import produce from "immer";

import {
  getConversations,
  createConversation,
  getMessages,
  chatReveal,
  sendMessage,
  fetchNext,
} from "api/lib/chat";

const initialState = {
  conversations: {
    body: null,
    canFetchNext: false,
    fetchingNext: false,
    loading: false,
    error: null,
  },
  newConversation: {
    loading: false,
  },
  chat: {
    messages: {
      body: null,
      loading: false,
      canFetchNext: false,
      fetchingNext: false,
    },
    info: {
      loading: false,
      data: null,
    },
  },
};

export const chatSlice = (set, get) => ({
  conversations: { ...initialState.conversations },
  fetchConversations: async () => {
    set(
      produce((state) => {
        state.conversations.loading = true;
      })
    );
    getConversations()
      .then((res) => {
        // let arr = res.data.data;
        set(
          produce((state) => {
            state.conversations.body = res.data;
            state.conversations.canFetchNext = res.data.next_page_url
              ? true
              : false;
          })
        );
      })
      .catch((err) => {})
      .finally(() => {
        set(
          produce((state) => {
            state.conversations.loading = false;
          })
        );
      });
  },
  fetchConversationsNext: () => {
    let url = get().conversations.body.next_page_url;
    set(
      produce((state) => {
        state.conversations.fetchingNext = true;
      })
    );
    fetchNext(url)
      .then((res) => {
        console.log(res.data.data);
        set((state) => ({
          conversations: {
            ...state.conversations,
            body: {
              ...res.data,
              data: [...state.conversations.body.data, ...res.data.data],
            },
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        set(
          produce((state) => {
            state.conversations.fetchingNext = false;
          })
        );
      });
  },
  newConversation: { ...initialState.newConversation },
  createNewConversation: async (data, callback) => {
    set(
      produce((state) => {
        state.newConversation.loading = true;
      })
    );
    createConversation(data)
      .then((res) => {
        callback(res.data.id, res.data.company_id);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        set(
          produce((state) => {
            state.newConversation.loading = true;
          })
        );
      });
  },
  chat: { ...initialState.chat },
  getChatInfo: async (chatId, companyId) => {
    set(
      produce((state) => {
        state.chat.info.loading = true;
      })
    );
    chatReveal(chatId, companyId)
      .then((res) => {
        set(
          produce((state) => {
            state.chat.info.data = res.data;
          })
        );
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        set(
          produce((state) => {
            state.chat.info.loading = false;
          })
        );
      });
  },
  fetchMessages: async (chatId, companyId) => {
    set(
      produce((state) => {
        state.chat.messages.loading = true;
      })
    );
    getMessages(chatId, companyId)
      .then((res) => {
        set(
          produce((state) => {
            state.chat.messages.body = res.data;
            state.chat.messages.canFetchNext = res.data.next_page_url
              ? true
              : false;
            state.chat.messages.body.data = res.data?.data?.map((i) => ({
              ...i,
              author: {
                id: i.sender_dashboard_user_id
                  ? i.sender_dashboard_user_id
                  : i.sender_mobile_user_id,
              },
              text: i.message,
              type: "text",
            }));
          })
        );
      })
      .catch((err) => console.log(err.response))
      .finally(() => {
        set(
          produce((state) => {
            state.chat.messages.loading = false;
          })
        );
      });
  },
  fetchMessagesNext: async () => {
    console.log("fetching next");
    let url = get().chat.messages.body.next_page_url;
    let params = {
      company_id: get().chat.info.data.company.id,
    };
    set(
      produce((state) => {
        state.chat.messages.fetchingNext = true;
      })
    );
    fetchNext(url, params)
      .then((res) => {
        let formattedArr = res.data?.data?.map((i) => ({
          ...i,
          author: {
            id: i.sender_dashboard_user_id
              ? i.sender_dashboard_user_id
              : i.sender_mobile_user_id,
          },
          text: i.message,
          type: "text",
        }));

        set((state) => ({
          chat: {
            ...state.chat,
            messages: {
              ...state.chat.messages,
              body: {
                ...res.data,
                data: [...state.chat.messages.body.data, ...formattedArr],
              },
              canFetchNext: res.data.next_page_url ? true : false,
            },
          },
        }));
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        set(
          produce((state) => {
            state.chat.messages.fetchingNext = false;
          })
        );
      });
  },
  onSendMessage: async (chatId, data) => {
    sendMessage(chatId, data)
      .then((res) => {
        //add to messages list
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  addMessage: (message) => {
    set(
      produce((state) => {
        state.chat.messages.body.data.unshift({
          ...message,
          author: {
            id: message.sender_dashboard_user_id
              ? message.sender_dashboard_user_id
              : message.sender_mobile_user_id,
          },
          text: message.message,
          type: "text",
        });
      })
    );
  },
  addImageMessage: (message) => {
    set(
      produce((state) => {
        state.chat.messages.body.data.unshift({
          // ...message,
          author: {
            id: message.sender_dashboard_user_id
              ? message.sender_dashboard_user_id
              : message.sender_mobile_user_id,
          },
          createdAt: Date.now(),
          height: message.height,
          width: message.width,
          uri: message.uri,
          // uri: `data:image/*;base64,${message.base64}`,
          type: "image",
        });
      })
    );
  },
});
