import { useTodoListEditorContext } from '../../../hooks/useTodoListEditorContext';
import { TitleInput } from '../../shared/components/TitleInput';
import '../styles/to-do-list-editor-content.css';

export function ToDoListEditorContent() {
    const { title, setTitle } = useTodoListEditorContext();

    return (
        <div className="popup-content">
            <TitleInput title={title} setTitle={setTitle} />
        </div>
    )
}