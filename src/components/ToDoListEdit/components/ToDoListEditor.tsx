import '../styles/to-do-list-editor.css';
import TodoListEditorContext from '../../../context/TodoListEditorContext';
import { ToDoListEditorHeader } from './ToDoListEditorHeader';
import { ToDoListEditorContent } from './ToDoListEditorContent';
import { TodoListType, Task } from '../../../Types';
import { useState } from 'react';

export function ToDoListEditor({ id, title, tasks }: TodoListType) {
    const [editorTitle, setEditorTitle] = useState<string>(title);
    const [editorTasks, setEditorTasks] = useState<Task[]>(tasks);

    return (
        <TodoListEditorContext.Provider value={{ id: id, title: editorTitle, setTitle: setEditorTitle, tasks: editorTasks, setTasks: setEditorTasks }}>
            <div className="todo-list-edit">
                <ToDoListEditorHeader />
                <div className="editor-scrollable ">
                    <ToDoListEditorContent />
                </div>
            </div>
        </TodoListEditorContext.Provider>
    );
}