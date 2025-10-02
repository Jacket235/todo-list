import { TaskSectionType } from "../../Types";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export function TaskSection({ tasks, status }: TaskSectionType){
    return(
        <>
            {tasks.map(task => (
                <li key={task.id}>
                    <ToDoItem task={task.text} status={status}/>
                </li>
            ))}
        </>
    );
}