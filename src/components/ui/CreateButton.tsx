import './createButton.css';

export function CreateButton({ text }: { text: string }) {
    return (
        <button className='button'>
            <img src='plus-sign.svg' width="16px" height="16px" />
            {text}
        </button>
    )
}