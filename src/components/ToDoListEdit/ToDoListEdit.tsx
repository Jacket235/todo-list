import './toDoListEdit.css'
import TodoListEditorContext from '../../context/TodoListEditorContext';

export function ToDoListEdit() {
    return (
        <TodoListEditorContext.Provider value={{}}>
            <div className="todo-list-edit">
                Edit todo lists.
            </div>
        </TodoListEditorContext.Provider>
    );
}