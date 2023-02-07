import { Auth } from "../types/AuthType";
import { API } from "./api";

export const signInRequest = async ({ email, password }: Auth) => {
  return await API.post("/users/login", {
    email,
    password,
  });
};

export const signUpRequest = async ({ email, password }: Auth) => {
  return await API.post("/users/create", {
    email,
    password,
  });
};
