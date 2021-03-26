import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  /* background: red; */
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="create project" done={true} />
      <TodoItem text="make components" done={true} />
      <TodoItem text="state control using context" done={false} />
      <TodoItem text="implement functionalities" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
