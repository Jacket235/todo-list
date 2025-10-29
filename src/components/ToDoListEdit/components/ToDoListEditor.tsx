import TodoListEditorContext from '../../../context/TodoListEditorContext';

export function ToDoListEdit() {
    return (
        <TodoListEditorContext.Provider value={{}}>
            <div className="todo-list-edit">
                Modify your list.
            </div>
        </TodoListEditorContext.Provider>
    );
}