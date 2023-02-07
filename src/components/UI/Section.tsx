import { Route, Routes } from "react-router";
import Login from "../auth/Login";
import NotFound from "../page/NotFound";
import Register from "../auth/Register";
import TodoList from "../todos/TodoList";

const Section = () => {
  return (
    <div className="max-w-screen-lg w-full px-5">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todos/:id" element={<TodoList></TodoList>} />
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Section;
