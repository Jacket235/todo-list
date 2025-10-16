import React from "react";
import { ToDoListEditorContextType } from "../Types";

const TodoListEditorContext = React.createContext<ToDoListEditorContextType | null>(null);

export default TodoListEditorContext;