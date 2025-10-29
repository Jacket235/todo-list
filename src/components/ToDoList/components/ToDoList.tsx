import '../styles/to-do-list.css'
import { ToDoListTitle } from './ToDoListTitle';
import { ToDoContent } from './ToDoContent';

export function ToDoList() {
    return (
        <div className="todo-list">
            <ToDoListTitle />
            <ToDoContent />
        </div>
    )
}