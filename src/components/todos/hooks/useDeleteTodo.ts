import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { deleteTodo } from "../../../api/todo";
import { queryKey } from "../../../react-query/constants";
import useCustomToast from "../../../common/hooks/useCustomToast";

export const useDeleteTodo = () => {
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteTodoMutate } = useMutation(
    (id: string) => deleteTodo(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey.todos);
        navigate("/");
        toast.closeAll();
        toast({
          title: "Todo 삭제 ",
          description: "선택한 Todo를 삭제했습니다 !",
          status: "success",
        });
      },
    }
  );

  return deleteTodoMutate;
};
