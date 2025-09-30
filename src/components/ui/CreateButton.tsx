import './createButton.css';

export function CreateButton({ text }: { text: string }) {
    return (
        <button className='button'>
            {text}
        </button>
    )
}