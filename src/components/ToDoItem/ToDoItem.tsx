import './toDoItem.css'
import { TodoItemData } from '../../Types';
import { Checkmark } from './Checkmark';

export function ToDoItem({ task, status } : TodoItemData) {
    return (
        <div className='todo-item'>
            <Checkmark status={status} />
            <div className='todo-item-main'>
                { task }
                <div className='todo-item-action'>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    );
}