import './createButton.css';
import { useContext } from 'react';
import { CreateButtonProps } from '../../Types';
import OverlayContext from '../../Context/OverlayContext';

export function CreateButton({ text }: CreateButtonProps) {
    const { openCreator } = useContext(OverlayContext)!; 

    return (
        <button className='button' onClick={openCreator}>
            <img src='plus-sign.svg' alt="plus sign" width="16px" height="16px" />
            {text}
        </button>
    )
}