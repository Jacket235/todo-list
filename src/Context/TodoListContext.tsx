import React from "react";
import { TodoListType } from "../Types";

const TodoListContext = React.createContext<TodoListType | null>(null);

export default TodoListContext;