import { useContext } from "react";
import TodoListContext from "../Context/TodoListContext";
import { TodoListData } from "../Types";

export function useTodoListContext(): TodoListData {
    const context = useContext(TodoListContext); 
    if (!context) throw new Error("useTodoListContext must be used within a TodoListContextProvider")
    return context;
}