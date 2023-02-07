import { getStorageUser } from "../common/user/userStorage";
import { TodoRequestObj } from "../types/TodoType";
import { API } from "./api";

export const getTodos = async () => {
  const token = getStorageUser();
  if (token) {
    const response = await API.get(`/todos`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data.data;
  } else {
    return;
  }
};
export const getTodoById = async (id: string) => {
  const token = getStorageUser();
  const response = await API.get(`/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return response.data.data;
};
export const createTodo = async ({ title, content }: TodoRequestObj) => {
  const token = getStorageUser();
  return await API.post(
    `/todos`,
    { title, content },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const updataTodo = async (data: TodoRequestObj) => {
  const token = getStorageUser();
  const { id, title, content } = data;
  return await API.put(
    `/todos/${id}`,
    { title, content },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const deleteTodo = async (id: string) => {
  const token = getStorageUser();
  return await API.delete(`/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};
