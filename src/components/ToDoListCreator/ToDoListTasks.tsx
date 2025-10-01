import './toDoListTasks.css';

export function ToDoListTasks() {
    return(
        <div className="list-tasks">
            <span>Tasks</span>
            <ul>
                <li>
                    <input placeholder='Study advanced psychology' />
                    <button>Delete</button>
                </li>
                <li id="add">
                    <button>
                        <img src='plus-sign.svg' width="16px" height="16px" />
                    </button>
                </li>
            </ul>
        </div>
    )
}