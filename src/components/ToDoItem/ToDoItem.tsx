import './toDoItem.css'
import { TodoItemData } from '../../Types';
import { Checkmark } from './Checkmark';
import { ToDoItemMain } from './ToDoItemMain';

export function ToDoItem({ task, status } : TodoItemData) {
    return (
        <div className='todo-item'>
            <Checkmark status={status} />
            <ToDoItemMain task={task} />
        </div>
    );
}