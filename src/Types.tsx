export type Task = {
    id: string;
    text: string;
    status: string;
}

export type OverlayProps = {
    onClose: () => void;
    child: React.ReactNode;
}

export type OverlayContextType = {
    overlayVisible: boolean;
    overlayChild: React.ReactNode;
    closeOverlay: () => void;
    openCreator: () => void;
    openEditor: (id:string, title: string, tasks: Task[]) => void;
}

export type ToDoListHeaderType = {
    title: string;
    icon: string;
    iconAlt: string;
    onButtonClick: () => void;
}

export type ToDoListCreatorContextType = {
    id: string;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>
    tasks: Task[];
    addTodo: (todo: TodoListType) => void;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export type ToDoListEditorContextType = {
    id: string;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export type TodosContextType = {
    todos: TodoListType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoListType[]>>;
    toggleTask: (todoId: string, taskId: string) => void;
}

export type TitleInputType = {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export type TodoListType = {
    id: string;
    title: string;
    tasks: Task[];
}

export type TodoItemData = {
    idTask: string;
    task: string;
    status: string;
}

export type CheckmarkType = {
    status: string;
}