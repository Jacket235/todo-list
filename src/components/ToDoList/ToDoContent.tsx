import { ToDoContentType } from '../../Types';
import { TaskSection } from './TaskSection';
import './toDoContent.css';

export function ToDoContent({ tasks }: ToDoContentType) {
    return (
        <div className="todo-content">
            <ul>
                <TaskSection tasks={tasks.complete} status="complete" />
                <TaskSection tasks={tasks.inprogress} status="inprogress" />
                <TaskSection tasks={tasks.incomplete} status="incomplete" />
            </ul>
        </div>
    );
}