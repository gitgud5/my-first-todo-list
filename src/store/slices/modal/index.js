import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalCreateTaskOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModalCreateTask(state) {
      state.modalCreateTaskOpen = true;
    },
    closeModalCreateTask(state) {
      state.modalCreateTaskOpen = false;
    },
  },
});

export default modalSlice.reducer