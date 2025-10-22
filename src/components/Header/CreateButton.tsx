import './createButton.css';
import { useOverlayContext } from '../../hooks/useOverlayContext';

export function CreateButton() {
    const { openCreator } = useOverlayContext();

    return (
        <button className='button' onClick={openCreator}>
            <img src='plus-sign.svg' alt="plus sign" width="16px" height="16px" />
            New todo list
        </button>
    )
}