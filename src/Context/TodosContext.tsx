import React from "react";
import { TodosContextType } from "../Types";

const TodosContext = React.createContext<TodosContextType | null>(null);

export default TodosContext;