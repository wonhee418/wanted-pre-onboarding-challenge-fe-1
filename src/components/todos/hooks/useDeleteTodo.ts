import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { deleteTodo } from "../../../api/todo";
import { queryKey } from "../../../react-query/constants";
import { toast } from "react-toastify";

export const useDeleteTodo = () => {
  const successNotify = (value: string) => toast.success(value);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteTodoMutate } = useMutation(
    (id: string) => deleteTodo(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey.todos);
        navigate("/");
        successNotify("Todo 삭제 ");
      },
    }
  );

  return deleteTodoMutate;
};
