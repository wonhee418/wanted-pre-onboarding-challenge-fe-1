import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../UI/Input";
import { usePostTodo } from "./hooks/usePostTodo";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const createTodoMutate = usePostTodo();

  const warningNotify = (value: string) => toast.warning(value);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim().length === 0 || title.trim() === "") {
      warningNotify("빈 내용은 작성할 수 없습니다.");
      return;
    }
    if (content.trim().length === 0 || content.trim() === "") {
      warningNotify("빈 내용은 작성할 수 없습니다.");
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
          type="submit"
        >
          작성하기
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
