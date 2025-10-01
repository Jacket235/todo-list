import { ToDoListTitleType } from "../../Types";
import "./toDoListTitle.css";

export function ToDoListTitle({ title, handleEditList }: ToDoListTitleType) {
    return (
        <div className="todo-title">
            <h2>{ title }</h2>
            <button onClick={handleEditList}>
                <img src='cogwheel.svg' width="16px" height="16px" />
            </button>
        </div>
    );
}