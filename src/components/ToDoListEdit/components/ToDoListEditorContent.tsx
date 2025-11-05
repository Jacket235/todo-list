import { useTodoListEditorContext } from '../../../hooks/useTodoListEditorContext';
import { TitleInput } from '../../shared/components/TitleInput';
import '../styles/to-do-list-editor-content.css';
import { ToDoListTasks } from '../../shared/components/ToDoListTasks';
import { ToDoListAction } from './ToDoListAction';

export function ToDoListEditorContent() {
    const { title, setTitle, tasks, setTasks } = useTodoListEditorContext();

    return (
        <div className="popup-content">
            <TitleInput title={title} setTitle={setTitle} />
            <ToDoListTasks tasks={tasks} setTasks={setTasks}/>
            <ToDoListAction />
        </div>
    )
}