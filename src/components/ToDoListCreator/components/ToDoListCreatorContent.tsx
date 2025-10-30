import '../styles/to-do-list-creator-content.css'
import { TitleInput } from '../../shared/components/TitleInput';
import { ToDoListAction } from './ToDoListAction';
import { ToDoListTasks } from './ToDoListTasks';
import { useTodoListCreatorContext } from '../../../hooks/useTodoListCreatorContext';

export function ToDoListCreatorContent() {
    const { title, setTitle } = useTodoListCreatorContext();

    return(
        <div className="popup-content">
            <TitleInput title={title} setTitle={setTitle}/>
            <ToDoListTasks />
            <ToDoListAction />
        </div>
    );
}