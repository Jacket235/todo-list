import '../styles/to-do-list-editor.css';
import TodoListEditorContext from '../../../context/TodoListEditorContext';
import { ToDoListEditorHeader } from './ToDoListEditorHeader';

export function ToDoListEdit() {
    return (
        <TodoListEditorContext.Provider value={{}}>
            <div className="todo-list-edit">
                <ToDoListEditorHeader />
                <div className="editor-scrollable ">

                </div>
            </div>
        </TodoListEditorContext.Provider>
    );
}