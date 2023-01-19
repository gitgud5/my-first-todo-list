import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuHeaderOpened: false,
  menuAccountOpened: false,
};

export const slice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    openMenuHeader(state) {
      state.menuHeaderOpened = true;
    },
    closeMenuHeader(state) {
      state.menuHeaderOpened = false;
    },
    openMenuAccount(state) {
      state.menuAccountOpened = true;
    },
    closeMenuAccount(state) {
      state.menuAccountOpened = false;
    },
    // setMenuHeaderOpened(state){
    //     state.menuHeaderOpened = !state.menuHeaderOpened;
    //     // state.menuHeaderOpened = action.payload;
    // }
  },
});

export default slice.reducer;
