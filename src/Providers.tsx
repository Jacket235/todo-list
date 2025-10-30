import { ReactNode, useState } from "react";
import { TodoListType, Task } from "./Types";
import { ToDoListCreator } from "./components/ToDoListCreator/components/ToDoListCreator";
import { ToDoListEditor } from "./components/ToDoListEdit/components/ToDoListEditor";
import TodosContext from "./context/TodosContext";
import OverlayContext from "./context/OverlayContext";

export const AppProviders: React.FC<{children: ReactNode}> = ({ children }) => {
    const [todos, setTodos] = useState<TodoListType[]>([]);

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

    const handleOpenEditor = (id: string, title: string, tasks: Task[]) => {
        setOverlayVisible(true);
        setOverlayChild(<ToDoListEditor id={id} title={title} tasks={tasks} />);
    }

    const handleToggleTask = (listId: string, taskId: string) => {
        const statuses = ["incomplete", "inprogress", "complete"];

        setTodos(prevTodos => {
            const updatedTodos = prevTodos.map(list => {
                if (list.id !== listId) return list;

                const updatedTasks = list.tasks.map(task => {
                    if (task.id !== taskId) return task;

                    const nextStatus = statuses[(statuses.indexOf(task.status) + 1) % statuses.length];
                    return { ...task, status: nextStatus };
                });

                return { ...list, tasks: updatedTasks };
            });

            localStorage.setItem("todos", JSON.stringify(updatedTodos));

            return updatedTodos;
        });
    }

    return (
        <TodosContext.Provider value={{todos: todos, setTodos: setTodos, toggleTask: handleToggleTask}}>
            <OverlayContext.Provider value={{overlayVisible: overlayVisible, overlayChild: overlayChild, closeOverlay: handleCloseOverlay, openCreator: handleOpenCreator, openEditor: handleOpenEditor}}>
                {children}
            </OverlayContext.Provider>
        </TodosContext.Provider>
    );
};