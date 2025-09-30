import './toDoItem.css'

export function ToDoItem({ task, status } : { task: string; status: string}) {
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