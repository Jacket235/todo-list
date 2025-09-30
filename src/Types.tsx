export type Task = {
    id: string;
    text: string;
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
