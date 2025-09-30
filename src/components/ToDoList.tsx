import './toDoList.css';

type props = {
    title: string;
    tasks: string[];
}

export function ToDoList({ title, tasks }: props) {
    return (
        <div className="todo-list">
            <div className="todo-title">
                <h2>{ title }</h2>
            </div>
            <div className="todo-content">
                <ul>
                    {tasks.map((task, i) => (
                        <li key={i}>
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
                            {/* <div className='todo-item'>
                                <span className="checkmark"></span>
                                { task }
                            </div>
                            <div className='todo-item-action'>
                                <button>Delete</button>
                                <button>Edit</button>
                            </div> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}