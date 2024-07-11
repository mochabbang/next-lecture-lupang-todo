import { TodoDto } from "@/types/tododtotype";
import React from "react";

interface Todo {
  todo: TodoDto;
}

const TodoListItem = ({ todo }: Todo) => {
  return <div>{todo?.content}</div>;
};

export default TodoListItem;
