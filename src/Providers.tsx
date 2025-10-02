import { ReactNode, useState } from "react";
import NewToDoListContext from "./Context/NewToDoListContext";
import OverlayContext from "./Context/OverlayContext";
import { Task, TodoListType } from "./Types";
import { ToDoListCreator } from "./components/ToDoListCreator/ToDoListCreator";
import { ToDoListEdit } from "./components/ToDoListEdit/ToDoListEdit";
import TodosContext from "./Context/TodosContext";

export const AppProviders: React.FC<{children: ReactNode}> = ({ children }) => {
    const [todos, setTodos] = useState<TodoListType[]>([]);

    const addTodo = (todo: TodoListType) => {
        setTodos(prev => {
            const updated = [...prev, todo];
            localStorage.setItem("todos", JSON.stringify(updated));
            return updated;
        });
    }

    const id = crypto.randomUUID();
    const [title, setTitle] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
    const [overlayChild, setOverlayChild] = useState<React.ReactNode| null>(null);

    const handleCloseOverlay = () => {
            setOverlayVisible(false);
            setOverlayChild(null);
        }
    
        const handleOpenCreator = () => {
            setOverlayVisible(true);
            setOverlayChild(<ToDoListCreator />);
        }
    
        const handleOpenEditor = () => {
            setOverlayVisible(true);
            setOverlayChild(<ToDoListEdit />);
        }

    return (
        <TodosContext.Provider value={{todos: todos, setTodos: setTodos, addTodo: addTodo}}>
            <NewToDoListContext.Provider value={{id: id, title: title, setTitle: setTitle, tasks: tasks, setTasks: setTasks}}>
                <OverlayContext.Provider value={{overlayVisible: overlayVisible, overlayChild: overlayChild, closeOverlay: handleCloseOverlay, openCreator: handleOpenCreator, openEditor: handleOpenEditor}}>
                    {children}
                </OverlayContext.Provider>
            </NewToDoListContext.Provider>
        </TodosContext.Provider>
    );
};