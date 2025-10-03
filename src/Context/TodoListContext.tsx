import React from "react";
import { TodoListData } from "../Types";

const TodoListContext = React.createContext<TodoListData | null>(null);

export default TodoListContext;