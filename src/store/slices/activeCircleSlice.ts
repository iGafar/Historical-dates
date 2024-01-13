import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IActiveState {
  value: number;
}

const initialState: IActiveState = {
  value: 0,
};

export const activeCircleSlice = createSlice({
  name: "activeCircle",
  initialState,
  reducers: {
    changeState: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { changeState, increment, decrement } = activeCircleSlice.actions;
export default activeCircleSlice.reducer;
