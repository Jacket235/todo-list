import "./toDoListTitle.css";
import { useOverlayContext } from "../../hooks/useOverlayContext";
import { useTodoListContext } from "../../hooks/useTodoListContext";


export function ToDoListTitle() {
    const { openEditor } = useOverlayContext();
    const { title } = useTodoListContext();

    return (
        <div className="todo-title">
            <h2>{ title }</h2>
            <button onClick={openEditor}>
                <img src='cogwheel.svg' alt="cogwheel" width="16px" height="16px" />
            </button>
        </div>
    );
}