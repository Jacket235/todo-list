import '../styles/to-do-list-header.css'
import { ToDoListHeaderType } from "../../../Types";

export function ToDoListHeader({ title, icon, iconAlt, onButtonClick }: ToDoListHeaderType) {
    return (
        <div className="todo-title">
            <h2>{ title }</h2>
            <button onClick={onButtonClick}>
                <img src={ icon } alt={ iconAlt } width="16px" height="16px" />
            </button>
        </div>
    );
}