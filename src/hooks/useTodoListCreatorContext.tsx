import { useContext } from "react";
import TodoListCreatorContext from "../Context/TodoListCreatorContext";
import { ToDoListCreatorContextType } from "../Types";

export function useTodoListCreatorContext(): ToDoListCreatorContextType {
    const context = useContext(TodoListCreatorContext);
    if (!context) throw new Error("useTodoListCreatorContext must be used within a TodoListCreatorContextProvider");
    return context;
}