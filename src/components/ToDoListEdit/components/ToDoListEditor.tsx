import '../styles/to-do-list-editor.css';
import TodoListEditorContext from '../../../context/TodoListEditorContext';
import { ToDoListEditorHeader } from './ToDoListEditorHeader';
import { ToDoListEditorContent } from './ToDoListEditorContent';

export function ToDoListEditor() {
    return (
        <TodoListEditorContext.Provider value={{}}>
            <div className="todo-list-edit">
                <ToDoListEditorHeader />
                <div className="editor-scrollable ">
                    <ToDoListEditorContent />
                </div>
            </div>
        </TodoListEditorContext.Provider>
    );
}