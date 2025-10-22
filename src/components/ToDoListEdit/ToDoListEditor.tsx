import './toDoListEditor.css'
import TodoListEditorContext from '../../context/TodoListEditorContext';

export function ToDoListEdit() {
    return (
        <TodoListEditorContext.Provider value={{}}>
            <div className="todo-list-edit">
                Create todo lists.
            </div>
        </TodoListEditorContext.Provider>
    );
}