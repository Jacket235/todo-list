import './toDoItem.css'
import { TodoItemData } from '../../Types';

export function ToDoItem({ task, status } : TodoItemData) {
    return (
        <div className='todo-item'>
            <div className={`todo-item-checkmark ${status}`}></div>
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