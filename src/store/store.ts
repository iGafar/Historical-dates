import { configureStore } from "@reduxjs/toolkit";
import activeCircle from "./slices/activeCircleSlice";

export const store = configureStore({
  reducer: {
    activeCircle: activeCircle,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
