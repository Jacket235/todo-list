import { useOverlayContext } from '../../../hooks/useOverlayContext';
import { ToDoListHeader } from '../../shared/components/ToDoListHeader';

export function ToDoListEditorHeader() {
    const { closeOverlay } = useOverlayContext();

    return(
        <ToDoListHeader title='Edit the current list' icon='exit.svg' iconAlt='exit' onButtonClick={ closeOverlay } />
    );
}