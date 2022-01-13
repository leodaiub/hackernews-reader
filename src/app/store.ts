import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { storiesApi } from "../features/news/newsAPI";

export const store = configureStore({
  reducer: {
    [storiesApi.reducerPath]: storiesApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
