import './createButton.css';
import { CreateButtonProps } from '../../Types';

export function CreateButton({ text }: CreateButtonProps) {
    return (
        <button className='button'>
            <img src='plus-sign.svg' alt="plus sign" width="16px" height="16px" />
            {text}
        </button>
    )
}