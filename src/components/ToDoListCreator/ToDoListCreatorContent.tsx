import { TitleInput } from './TitleInput'
import { ToDoListAction } from './ToDoListAction';
import './toDoListCreatorContent.css'
import { ToDoListTasks } from './ToDoListTasks'

export function ToDoListCreatorContent() {
    return(
        <div className="popup-content">
            <TitleInput />
            <ToDoListTasks />
            <ToDoListAction />
        </div>
    );
}