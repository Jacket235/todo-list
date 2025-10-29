import { useOverlayContext } from '../../../hooks/useOverlayContext';
import { ToDoListHeader } from '../../shared/components/ToDoListHeader';

export function TodoListCreatorHeader() {
    const { closeOverlay } = useOverlayContext();

    return(
        <ToDoListHeader title='Create a new todo list' icon='exit.svg' iconAlt='exit' onButtonClick={ closeOverlay } />
    );
}