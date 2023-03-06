import SectionTitleArea from "../UI/SectionTitleArea";
import TodoItem from "./TodoItem";
import React, { useEffect, useState } from "react";
import TodoDetail from "./TodoDetail";
import { useLocation } from "react-router";
import { Spinner } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { hasTokenState } from "../../atom/atom";
import { useGetTodo } from "./hooks/useGetTodo";
import TodoForm from "./TodoForm";
import { Todo } from "../../types/TodoType";
import { toast } from "react-toastify";

const TodoList = () => {
  const [editMode, setEditMode] = useState(false);
  const tokenIsValid = useRecoilValue(hasTokenState);
  const location = useLocation();
  const { todoList, isLoading, isError, error, refetch } = useGetTodo();
  const errorNotify = (value: string) => toast.error(value);
  useEffect(() => {
    refetch();
  }, [tokenIsValid]);

  const changeEditModeHandler = () => {
    setEditMode(false);
  };

  return (
    <div>
      {!tokenIsValid && (
        <SectionTitleArea
          title="Welcome MyTodo"
          desc="로그인 후 이용 가능합니다."
        />
      )}
      {tokenIsValid && (
        <>
          <SectionTitleArea
            title="TodoList"
            desc={"내가 앞으로 해야 할 일 목록이에요. 📃"}
          />
          <TodoForm />
          <div className="flex pb-10">
            <div className="w-full ">
              {isError && errorNotify(error!.toString())}
              {isLoading ? (
                <div className=" text-center">
                  <Spinner />
                </div>
              ) : (
                <ul>
                  {todoList?.map((item: Todo) => (
                    <>
                      <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        createdAt={item.createdAt}
                        editMode={editMode}
                        onEditMode={changeEditModeHandler}
                      />
                      {location.state === item.id && (
                        <TodoDetail
                          editState={editMode}
                          onEditMode={setEditMode}
                        />
                      )}
                    </>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
