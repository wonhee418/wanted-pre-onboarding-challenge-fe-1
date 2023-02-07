const USER_LOCALSTORAGE_KEY = "token";

export const getStorageUser = () => {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return storedUser;
};

export const setStorageUser = (token: string) => {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, token);
};

export const clearStorageUser = () => {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
};
