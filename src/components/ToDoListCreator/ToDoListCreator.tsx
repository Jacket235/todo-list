import { PopupContent } from './PopupContent';
import { PopupHeader } from './PopupHeader'
import './toDoListCreator.css'

export function ToDoListCreator() {
    return (
        <div className="todo-list-creator">
            <PopupHeader />
            <PopupContent />
        </div>
    );
}