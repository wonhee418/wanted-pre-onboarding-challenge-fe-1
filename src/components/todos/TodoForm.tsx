import React, { useState } from "react";
import useCustomToast from "../../common/hooks/useCustomToast";
import Input from "../UI/Input";
import { usePostTodo } from "./hooks/usePostTodo";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const createTodoMutate = usePostTodo();
  const toast = useCustomToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim().length === 0 || title.trim() === "") {
      toast({
        title: "빈 내용은 작성할 수 없습니다.",
        description: "할 일을 작성해주세요.",
        status: "warning",
      });
      return;
    }
    if (content.trim().length === 0 || content.trim() === "") {
      toast({
        title: "빈 내용은 작성할 수 없습니다.",
        description: "상세 내용을 작성해주세요.",
        status: "warning",
      });
      return;
    }
    createTodoMutate({ title, content });
    setTitle("");
    setContent("");
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const inputClass = "border rounded-md py-3 pl-3 w-full focus:border-1 mb-4";

  return (
    <div className="mb-8">
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          id="title"
          placeholder="할 일"
          value={title}
          onChange={titleChangeHandler}
          htmlFor=""
          className={inputClass}
        />
        <Input
          type="text"
          id="content"
          placeholder="상세 내용"
          value={content}
          onChange={contentChangeHandler}
          htmlFor=""
          className={inputClass}
        />
        <button
          className="border w-full bg-slate-400 text-white rounded p-1.5 hover:bg-slate-500 transition-all"
          type="submit">
          작성하기
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
