import { useMutation, useQueryClient } from "react-query";
import { createTodo } from "../../../api/todo";
import { queryKey } from "../../../react-query/constants";
import { TodoRequestObj } from "../../../types/TodoType";
import useCustomToast from "../../../common/hooks/useCustomToast";

export const usePostTodo = () => {
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  const { mutate: createTodoMutate } = useMutation(
    (data: TodoRequestObj) => createTodo(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey.todos);
        toast.closeAll();
        toast({
          title: "Todo 생성 !",
          description: "새로운 TodoList를 추가하였습니다 !",
          status: "success",
        });
      },
    }
  );

  return createTodoMutate;
};
