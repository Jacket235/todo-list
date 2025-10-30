import { useContext } from "react";
import TodoListEditorContext from "../context/TodoListEditorContext";
import { ToDoListEditorContextType } from "../Types";

export function useTodoListEditorContext(): ToDoListEditorContextType {
    const context = useContext(TodoListEditorContext);
    if (!context) throw new Error("useTodoListEditorContext must be used within a TodoListEditorContextProvider");
    return context;
}