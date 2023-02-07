import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getTodos } from "../../../api/todo";
import { queryKey } from "../../../react-query/constants";
import { Todo } from "../../../types/TodoType";

export const useGetTodo = () => {
  const {
    data: todoList,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Todo[], AxiosError>(queryKey.todos, getTodos);

  return {
    todoList,
    isLoading,
    isError,
    error,
    refetch,
  };
};
