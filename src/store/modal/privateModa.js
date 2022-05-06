const initialState = {
  visible: false,
};

export const privateModalSlice = (set, get) => ({
  privateModal: initialState,
  setPrivateModalVisible: (obj) => {
    set(() => ({ privateModal: obj }));
  },
});
