import React from "react";
import { ToDoListCreatorContextType } from "../Types";

const TodoListCreatorContext = React.createContext<ToDoListCreatorContextType | null>(null);

export default TodoListCreatorContext;