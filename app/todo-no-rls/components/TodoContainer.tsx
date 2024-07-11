"use client";

import React from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  console.log(todos);
  return (
    <div>
      <TodoList
        sharedUserFullName=""
        owerUserId="123123"
        loaidng={loading}
        todoListData={todos}
      />
    </div>
  );
};

export default TodoContainer;
