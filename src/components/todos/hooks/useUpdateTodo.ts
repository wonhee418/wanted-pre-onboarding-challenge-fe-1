import { useMutation, useQueryClient } from "react-query";
import { useLocation } from "react-router";
import { updataTodo } from "../../../api/todo";
import { queryKey } from "../../../react-query/constants";
import { Todo, TodoRequestObj } from "../../../types/TodoType";
import useCustomToast from "../../../common/hooks/useCustomToast";

export const useUpdateTodo = () => {
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const { state: id } = useLocation();

  const { mutate: updateTodoMutate } = useMutation(
    (data: TodoRequestObj) => updataTodo(data),
    {
      onMutate: async (newTodo) => {
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
          toast({
            title: "수정하는데 실패하였습니다.",
            status: "warning",
          });
        }
      },
      onSuccess: () => {
        toast.closeAll();
        toast({
          title: "Todo 수정 성공 !",
          description: "선택한 Todo를 수정하였습니다 !",
          status: "success",
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries([queryKey.todo, id]);
        queryClient.invalidateQueries(queryKey.todos);
      },
    }
  );

  return updateTodoMutate;
};
