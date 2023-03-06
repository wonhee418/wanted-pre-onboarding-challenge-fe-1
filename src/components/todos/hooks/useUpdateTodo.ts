import { useMutation, useQueryClient } from "react-query";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { updataTodo } from "../../../api/todo";
import { queryKey } from "../../../react-query/constants";
import { Todo, TodoRequest } from "../../../types/TodoType";

export const useUpdateTodo = () => {
  const successNotify = (value: string) => toast.success(value);
  const warningNotify = (value: string) => toast.warning(value);
  const queryClient = useQueryClient();
  const { state: id } = useLocation();

  const { mutate: updateTodoMutate } = useMutation(
    (data: TodoRequest) => updataTodo(data),
    {
      onMutate: async (newTodo: TodoRequest) => {
        queryClient.cancelQueries([queryKey.todo, id]);

        const prevTodoData = queryClient.getQueryData<Todo>([
          queryKey.todo,
          id,
        ]);
        queryClient.setQueryData([queryKey.todo, id], newTodo);

        return { prevTodoData };
      },
      onError: (error, newTodo, context) => {
        if (context!.prevTodoData) {
          queryClient.setQueryData([queryKey.todo, id], context!.prevTodoData);
          warningNotify("수정하는데 실패하였습니다.");
        }
      },
      onSuccess: () => {
        successNotify("Todo 수정 성공 !");
      },
      onSettled: () => {
        queryClient.invalidateQueries([queryKey.todo, id]);
        queryClient.invalidateQueries(queryKey.todos);
      },
    }
  );

  return updateTodoMutate;
};
