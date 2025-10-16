import './createButton.css';
import { CreateButtonProps } from '../../Types';
import { useOverlayContext } from '../../hooks/useOverlayContext';

export function CreateButton({ text }: CreateButtonProps) {
    const { openCreator } = useOverlayContext();

    return (
        <button className='button' onClick={openCreator}>
            <img src='plus-sign.svg' alt="plus sign" width="16px" height="16px" />
            {text}
        </button>
    )
}