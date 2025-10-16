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
    openEditor: () => void;
}

export type CreateButtonProps = {
    text: string;
}

export type ToDoListCreatorContextType = {
    id: string;
    title: string;
    setTitle: (value: string) => void;
    tasks: Task[];
    addTodo: (todo: TodoListType) => void;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export type ToDoListEditorContextType = {
    /**
    * 
    */
}

export type TodosContextType = {
    todos: TodoListType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoListType[]>>;
    toggleTask: (todoId: string, taskId: string) => void;
}

export type TodoListType = {
    id: string;
    title: string;
    tasks: Task[];
}

export type TodoListData = {
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