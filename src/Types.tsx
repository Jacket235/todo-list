import { ReactElement } from "react";
import { ToDoListCreator } from "./components/ToDoListCreator/ToDoListCreator";
import { ToDoListEdit } from "./components/ToDoListEdit/ToDoListEdit";

export type Task = {
    id: string;
    text: string;
}

export type CreateButtonProps = {
    text: string;
}

type OverlayChildType = ReactElement<typeof ToDoListCreator> | ReactElement<typeof ToDoListEdit> | null;
export type OverlayContextType = {
    openOverlay: (child: OverlayChildType) => void;
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

export type CheckmarkType = {
    status: string;
}

export type TodoItemMainType = {
    task: string;
}

export type ToDoListTitleType = {
    title: string;
    handleEditList: () => void;
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
