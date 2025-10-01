import './todoListCreatorHeader.css';
import { useContext } from 'react';
import OverlayContext from '../../Context/OverlayContext';

export function TodoListCreatorHeader() {
    const overlay = useContext(OverlayContext);

    const handleClosePopup = () => {
        overlay?.closeOverlay();
    }

    return(
        <div className='popup-header'>
            Create a new todo list
            <button onClick={handleClosePopup}>
                <img src='exit.svg' width="16px" height="16px" />
            </button>
        </div>
    );
}