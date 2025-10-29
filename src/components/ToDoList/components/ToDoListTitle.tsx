import { useOverlayContext } from "../../../hooks/useOverlayContext";
import { useTodoListContext } from "../../../hooks/useTodoListContext";
import { ToDoListHeader } from "../../shared/components/ToDoListHeader";

export function ToDoListTitle() {
    const { openEditor } = useOverlayContext();
    const { title } = useTodoListContext();

    return (
        <ToDoListHeader title={ title } icon='cogwheel.svg' iconAlt='cogwheel' onButtonClick={ openEditor } />
    );
}