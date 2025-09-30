import { ToDoItem } from './ToDoItem';
import './toDoList.css';

export function ToDoList({ title, tasks }: {title: string, tasks: string[]}) {
    return (
        <div className="todo-list">
            <div className="todo-title">
                <h2>{ title }</h2>
            </div>
            <div className="todo-content">
                <ul>
                    {tasks.map((task, i) => (
                        <li key={i}>
                            <ToDoItem task={task}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}