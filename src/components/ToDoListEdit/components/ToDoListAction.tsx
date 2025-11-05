import '../styles/to-do-list-action.css';

export function ToDoListAction() {
    return (
        <div className="editor-list-action">
            <div className="delete-list-button-container">
                <button>Delete list</button>
            </div>
            <div className="default-button-container">
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    )
}