export type Task = {
    id: string;
    text: string;
}

export type OverlayProps = {
    onClose: () => void;
    child: React.ReactNode;
}

export type OverlayContextType = {
    closeOverlay: () => void;
    openCreator: () => void;
    openEditor: () => void;
}

export type CreateButtonProps = {
    text: string;
}

export type NewToDoListContextType = {
    id: string;
    title: string;
    setTitle: (value: string) => void;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export type TodoListType = {
    id: string;
    title: string;
    tasks: { 
        complete: Task[], 
        inprogress: Task[], 
        incomplete: Task[] 
    };
}

export type TodoListData = {
    title: string;
    tasks: { 
        complete: Task[], 
        inprogress: Task[], 
        incomplete: Task[] 
    };
}

export type TodoItemData = {
    task: string;
    status: string;
}

export type CheckmarkType = {
    status: string;
}

export type TodoItemMainType = {
    task: string;
}

export type ToDoListTitleType = {
    title: string;
}

export type ToDoContentType = {
    tasks: { 
        complete: Task[], 
        inprogress: Task[], 
        incomplete: Task[] 
    };
}

export type TaskSectionType = {
    tasks: Task[];
    status: string;
}