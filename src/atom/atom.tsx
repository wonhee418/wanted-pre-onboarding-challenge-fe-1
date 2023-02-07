import { atom } from "recoil";
import { getStorageUser } from "../common/user/userStorage";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const hasTokenState = atom({
  key: "hasToken",
  default: getStorageUser(),
});
