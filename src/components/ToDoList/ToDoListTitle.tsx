import { ToDoListTitleType } from "../../Types";
import { useContext } from "react";
import OverlayContext from "../../Context/OverlayContext";
import "./toDoListTitle.css";

export function ToDoListTitle({ title }: ToDoListTitleType) {
    const { openEditor } = useContext(OverlayContext)!; 

    return (
        <div className="todo-title">
            <h2>{ title }</h2>
            <button onClick={openEditor}>
                <img src='cogwheel.svg' alt="cogwheel" width="16px" height="16px" />
            </button>
        </div>
    );
}