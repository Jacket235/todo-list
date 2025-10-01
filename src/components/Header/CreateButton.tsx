import './createButton.css';
import { CreateButtonProps } from '../../Types';
import OverlayContext from '../../Context/OverlayContext';
import { useContext } from 'react';
import { ToDoListCreator } from '../ToDoListCreator/ToDoListCreator';

export function CreateButton({ text }: CreateButtonProps) {
    const overlay = useContext(OverlayContext);

    const handleCreateList = () => {
        overlay?.openOverlay(<ToDoListCreator />);
    }

    return (
        <button className='button' onClick={handleCreateList}>
            <img src='plus-sign.svg' width="16px" height="16px" />
            {text}
        </button>
    )
}