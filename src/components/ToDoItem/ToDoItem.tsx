import './toDoItem.css'
import { TodoItemData } from '../../Types';
import { Checkmark } from './Checkmark';
import { useContext } from 'react';
import TodosContext from '../../Context/TodosContext';
import TodoListContext from '../../Context/TodoListContext';

export function ToDoItem({ idTask, task, status } : TodoItemData) {
    const { toggleTask } = useContext(TodosContext)!;
    const { id } = useContext(TodoListContext)!;

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