import React from "react";
import { ToDoListCreatorContextType } from "../Types";

const ToDoListCreatorContext = React.createContext<ToDoListCreatorContextType | null>(null);

export default ToDoListCreatorContext;