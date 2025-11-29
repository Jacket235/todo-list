import { useOverlayContext } from '../../../hooks/useOverlayContext';
import { useTodoListEditorContext } from '../../../hooks/useTodoListEditorContext';
import { useTodosContext } from '../../../hooks/useTodosContext';
import '../styles/to-do-list-action.css';

export function ToDoListAction() {
    const { id, title, tasks } = useTodoListEditorContext();
    const { setTodos } = useTodosContext();
    const { closeOverlay } = useOverlayContext();

    const handleDeleteList = () => {
        const updated = setTodos(prev => {
            const updated = prev.filter(todo => todo.id !== id)
            localStorage.setItem("todos", JSON.stringify(updated));

            return updated
        });
        
        closeOverlay();
    }

    const handleClose = () => {
        closeOverlay();
    }

    return (
        <div className="editor-list-action">
            <div className="delete-list-button-container">
                <button onClick={handleDeleteList}>Delete list</button>
            </div>
            <div className="default-button-container">
                <button onClick={handleClose}>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    )
}