import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Member } from "../../graphql-types";
import { resetToken } from "../../util/token";

export interface AuthState {
  user: Member | null;
}

export const initialState: AuthState = {
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<Member>) => {
      state.user = action.payload;
    },
    logout: (state: AuthState) => {
      resetToken();
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
