const TOKEN_KEY = "token";

export const setToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token);

export const resetToken = () => localStorage.setItem(TOKEN_KEY, "");

export const getToken = () => localStorage.getItem(TOKEN_KEY);
