import { ToDoListTitleType } from "../../Types";
import "./toDoListTitle.css";

export function ToDoListTitle({ title }: ToDoListTitleType) {
    return (
        <div className="todo-title">
            <h2>{ title }</h2>
            <button>
                <img src='cogwheel.svg' alt="cogwheel" width="16px" height="16px" />
            </button>
        </div>
    );
}