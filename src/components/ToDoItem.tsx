import './toDoItem.css'

export function ToDoItem({ task } : { task: string}) {
    return (
        <div className='todo-item'>
            <div className='todo-item-checkmark'></div>
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