export type Task = {
    id: string;
    text: string;
}

export type CreateButtonProps = {
    text: string;
}

export type OverlayContextType = {
    openOverlay: (child: React.ReactNode) => void;
    closeOverlay: () => void;
};

export type OverlayProps = {
    children: React.ReactNode;
    onClose: () => void;
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
