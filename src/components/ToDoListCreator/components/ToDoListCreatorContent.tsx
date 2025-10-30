import '../styles/to-do-list-creator-content.css'
import { TitleInput } from '../../shared/components/TitleInput';
import { ToDoListAction } from './ToDoListAction';
import { ToDoListTasks } from './ToDoListTasks';

export function ToDoListCreatorContent() {
    return(
        <div className="popup-content">
            <TitleInput />
            <ToDoListTasks />
            <ToDoListAction />
        </div>
    );
}