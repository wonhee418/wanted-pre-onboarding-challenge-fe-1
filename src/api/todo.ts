import { AxiosError } from "axios";
import { TodoRequest } from "../types/TodoType";
import { API } from "./api";

export const getTodos = async () => {
  const response = await API.get(`/todos`);
  return response.data.data;
};
export const getTodoById = async (id: string) => {
  const response = await API.get(`/todos/${id}`);
  return response.data.data;
};
export const createTodo = async ({ title, content }: TodoRequest) => {
  return await API.post(`/todos`, { title, content });
};

export const updataTodo = async (data: TodoRequest) => {
  const { id, title, content } = data;
  await API.put(`/todos/${id}`, { title, content })
    .then((res) => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

export const deleteTodo = async (id: string) => {
  return await API.delete(`/todos/${id}`);
};
