import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { getTodoById } from "../../api/todo";
import { queryKey } from "../../react-query/constants";
import { TodoRequest } from "../../types/TodoType";
import { useDeleteTodo } from "./hooks/useDeleteTodo";
import { useUpdateTodo } from "./hooks/useUpdateTodo";

const TodoDetail = (props: {
  editState: boolean;
  onEditMode: (data: boolean) => void;
}): React.ReactElement => {
  const { editState, onEditMode } = props;
  const { state } = useLocation();
  const [editTitle, setEditTitle] = useState("");
  const [editCotnet, setEditCotnet] = useState("");
  const { data: todo } = useQuery(
    [queryKey.todo, state],
    () => getTodoById(state),
    {
      //TODO: 깜빡이는 문제 수정하기
      cacheTime: 0,
      onSuccess: (data) => {
        setEditTitle(data.title);
        setEditCotnet(data.content);
      },
    }
  );
  const deleteTodoMutate = useDeleteTodo();
  const updateTodoMutate = useUpdateTodo();

  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const changeContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditCotnet(e.target.value);
  };

  const editTodoToggleHandler = () => {
    onEditMode(!editState);
    if (editState) {
      if (
        window.confirm(
          "수정중인 내용은 저장되지않습니다. 그래도 취소하시겠습니까?"
        )
      ) {
        setEditTitle(todo?.title);
        setEditCotnet(todo?.content);
      } else {
        return;
      }
    }
  };

  const updateTodoHandler = (data: TodoRequest) => {
    updateTodoMutate(data);
    onEditMode(false);
  };

  const deleteTodoHandler = async (id: string) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deleteTodoMutate(id);
    } else {
      return;
    }
  };

  return (
    <div className="border rounded relative p-6 shadow-md pb-20  mb-3">
      <div className=" relative">
        {!editState && (
          <>
            <h2 className=" text-2xl font-bold pb-3 mb-4 border-b border-slate-300">
              {todo?.title}
            </h2>
            <div className=" min-h-[10rem] max-h-4 pb-5 overflow-auto">
              {todo?.content}
            </div>
            <div className=" absolute right-0 -bottom-12">
              <button
                className="bg-red-500 text-white py-1 px-3 mr-2 rounded transition-all hover:bg-red-600"
                onClick={deleteTodoHandler.bind(null, todo?.id)}>
                삭제
              </button>
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded transition-all hover:bg-blue-600"
                onClick={editTodoToggleHandler}>
                수정
              </button>
            </div>
          </>
        )}
        {editState && (
          <>
            <Input
              type="text"
              value={editTitle}
              onChange={changeTitleHandler}
              className="text-2xl font-bold border mb-4 rounded-md w-full p-2"
            />
            <textarea
              value={editCotnet}
              onChange={changeContentHandler}
              className=" border rounded-md w-full min-h-[10rem] p-2"
            />
            <div className=" absolute right-0 -bottom-12">
              <button
                className="bg-gray-500 text-white py-1 px-3 mr-2 rounded transition-all hover:bg-gray-600"
                onClick={editTodoToggleHandler}>
                취소
              </button>
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded transition-all hover:bg-blue-600"
                onClick={updateTodoHandler.bind(null, {
                  id: todo?.id,
                  title: editTitle,
                  content: editCotnet,
                })}>
                저장
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoDetail;
