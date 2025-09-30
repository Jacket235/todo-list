import { ToDoItem } from './ToDoItem';
import './toDoList.css';
import { TodoListData } from '../Types';

export function ToDoList({ title, tasks }: TodoListData) {
    return (
        <div className="todo-list">
            <div className="todo-title">
                <h2>{ title }</h2>
                <button>
                    <img src='cogwheel.svg' width="16px" height="16px" />
                </button>
            </div>
            <div className="todo-content">
                <ul>
                    {tasks["complete"].map((task, i) => (
                        <li key={task.id}>
                            <ToDoItem task={task.text} status='complete'/>
                        </li>
                    ))}
                    {tasks["inprogress"].map((task, i) => (
                        <li key={task.id}>
                            <ToDoItem task={task.text} status='inprogress'/>
                        </li>
                    ))}
                    {tasks["incomplete"].map((task, i) => (
                        <li key={task.id}>
                            <ToDoItem task={task.text} status='incomplete'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}