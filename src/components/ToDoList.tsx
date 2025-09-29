import './toDoList.css';

export function ToDoList() {
    return (
        <div className="todo-list">
            <div className="todo-title">
                <h2>Title</h2>
            </div>
            <div className="todo-content">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>
    )
}