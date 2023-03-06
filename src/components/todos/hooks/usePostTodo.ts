import { useMutation, useQueryClient } from "react-query";
import { createTodo } from "../../../api/todo";
import { queryKey } from "../../../react-query/constants";
import { TodoRequest } from "../../../types/TodoType";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

export const usePostTodo = () => {
  const successNotify = (value: string) => toast.success(value);
  const errorNotify = (value: string) => toast.error(value);
  const queryClient = useQueryClient();

  const { mutate: createTodoMutate } = useMutation(
    (data: TodoRequest) => createTodo(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey.todos);
        successNotify("Todo 생성 !");
      },
      onError: (error: unknown) => {
        if (isAxiosError(error)) {
          if (error.response?.status === 400)
            errorNotify(error.response.data.details.toString());
        }
      },
    }
  );

  return createTodoMutate;
};
