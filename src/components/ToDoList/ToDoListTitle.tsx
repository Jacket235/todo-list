import { useContext } from "react";
import OverlayContext from "../../Context/OverlayContext";
import TodoListContext from "../../Context/TodoListContext";
import "./toDoListTitle.css";


export function ToDoListTitle() {
    const { openEditor } = useContext(OverlayContext)!; 
    const { title } = useContext(TodoListContext)!; 

    return (
        <div className="todo-title">
            <h2>{ title }</h2>
            <button onClick={openEditor}>
                <img src='cogwheel.svg' alt="cogwheel" width="16px" height="16px" />
            </button>
        </div>
    );
}