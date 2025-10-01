import './toDoItemMain.css';
import { TodoItemMainType } from "../../Types";
import { ToDoItemAction } from './ToDoItemAction';

export function ToDoItemMain({ task }: TodoItemMainType) {
    return (
        <div className='todo-item-main'>
            { task }
            <ToDoItemAction />
        </div>
    );
}