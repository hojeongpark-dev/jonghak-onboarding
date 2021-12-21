import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  code: number;
  id: string;
};

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state: AuthState) => {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

// code: 430013
// createdAt: "2021-12-20 18:43:09"
// email: "jonghak.seo@creatrip.com"
// id: "430013"
// level: "SUPER_ADMIN"
// name: "jonghak"
// nickname: "jonghakseo"
// partnerships: []
// picture: null
// socialInfos: [{code: 426356, type: "CREATRIP", __typename: "SocialInfo"}]
// updatedAt: "2021-12-21 16:16:42"
// __typename: "Member"
