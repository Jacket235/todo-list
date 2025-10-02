import './todoListCreatorHeader.css';
import { useContext } from 'react';
import OverlayContext from '../../Context/OverlayContext';

export function TodoListCreatorHeader() {
    const { closeOverlay } = useContext(OverlayContext)!;

    return(
        <div className='popup-header'>
            Create a new todo list
            <button onClick={closeOverlay}>
                <img src='exit.svg' alt="Exit" width="16px" height="16px" />
            </button>
        </div>
    );
}