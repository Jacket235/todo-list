import { ToDoContentType } from '../../Types';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './toDoContent.css';

export function ToDoContent({ tasks }: ToDoContentType) {
    return (
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
    );
}