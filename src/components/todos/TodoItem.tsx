import { useLocation, useNavigate } from "react-router";
import { TodoProps } from "../../types/TodoType";

const TodoItem = (props: TodoProps) => {
  const { id, title, createdAt, editMode, onEditMode } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const isIdValid = location.pathname.includes(`${id}`);
  const date = new Date(createdAt);
  const createAt = new Intl.DateTimeFormat("ko-KR").format(date);

  const showDetailHandler = () => {
    if (isIdValid && editMode) {
      if (
        window.confirm("수정중인 내용이 취소됩니다. 그래도 이동하시겠습니까?")
      ) {
        navigate("/");
        onEditMode();
        return;
      }
      return;
    }
    if (isIdValid) {
      navigate("/");
      onEditMode();
      return;
    }
    if (editMode) {
      if (
        window.confirm("수정중인 내용이 취소됩니다. 그래도 이동하시겠습니까?")
      ) {
        onEditMode();
        navigate(`/todos/${id}`, { state: id });
        return;
      } else {
        return;
      }
    }
    navigate(`/todos/${id}`, { state: id });
  };

  return (
    <li
      className=" relative border rounded p-4 py-5 pr-16 mb-4 last:mb-0 shadow-md  transition-all cursor-pointer hover:-translate-y-1"
      onClick={showDetailHandler}>
      <div className="">
        <p className=" text-base font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
        <p className=" text-xs">{createAt}</p>
        {isIdValid && (
          <span className=" absolute right-4 top-1/2 -translate-y-1/2">📖</span>
        )}
        {!isIdValid && (
          <span className=" absolute right-4 top-1/2 -translate-y-1/2">📘</span>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
