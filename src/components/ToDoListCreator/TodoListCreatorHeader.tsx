import './todoListCreatorHeader.css';
import { useOverlayContext } from '../../hooks/useOverlayContext';

export function TodoListCreatorHeader() {
    const { closeOverlay } = useOverlayContext();

    return(
        <div className='popup-header'>
            Create a new todo list
            <button onClick={closeOverlay}>
                <img src='exit.svg' alt="Exit" width="16px" height="16px" />
            </button>
        </div>
    );
}