import './toDoListEditor.css'
import TodoListEditorContext from '../../context/TodoListEditorContext';
import { useOverlayContext } from '../../hooks/useOverlayContext';
import { ToDoListHeader } from '../shared/ToDoListHeader';
import { ToDoListEditorContent } from './ToDoListEditorContent';

export function ToDoListEdit() {
    const { closeOverlay } = useOverlayContext();

    return (
        <TodoListEditorContext.Provider value={{}}>
            <div className="todo-list-edit">
                <ToDoListHeader title='Edit your list' icon='exit.svg' iconAlt='exit' onButtonClick={ closeOverlay }/>
                <div className='scrollable'>
                    <ToDoListEditorContent />
                </div>
            </div>
        </TodoListEditorContext.Provider>
    );
}