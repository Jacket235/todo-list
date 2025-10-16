import './toDoItem.css'
import { TodoItemData } from '../../Types';
import { Checkmark } from './Checkmark';
import { useTodosContext } from '../../hooks/useTodosContext';
import { useTodoListContext } from '../../hooks/useTodoListContext';

export function ToDoItem({ idTask, task, status } : TodoItemData) {
    const { toggleTask } = useTodosContext();
    const { id } = useTodoListContext();

    return (
        <div className='todo-item' onClick={() => toggleTask(id, idTask)}>
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