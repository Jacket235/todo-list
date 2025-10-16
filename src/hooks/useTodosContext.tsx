import { useContext } from "react";
import TodosContext from "../Context/TodosContext";
import { TodosContextType } from "../Types";

export function useTodosContext(): TodosContextType {
    const context = useContext(TodosContext);
    if (!context) throw new Error("useTodosContext must be used within a TodosProvider")
    return context;
}