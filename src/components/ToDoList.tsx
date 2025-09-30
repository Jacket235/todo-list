import './toDoList.css';

type props = {
    title: string;
    tasks: string[];
}

export function ToDoList({ title, tasks }: props) {
    return (
        <div className="todo-list">
            <div className="todo-title">
                <h2>Title</h2>
            </div>
            <div className="todo-content">
                <ul>
                    {tasks.map((task, i) => (
                        <li key={i}>
                            <div className='todo-item'>
                                <label className="custom-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    { task }
                                </label>
                            </div>
                            <div className='todo-item-action'>
                                <button>Delete</button>
                                <button>Edit</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}