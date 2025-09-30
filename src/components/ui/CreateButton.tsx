import './createButton.css';

type props = {
    text: string
}

export function CreateButton({ text }: props) {
    return (
        <button className='button'>
            {text}
        </button>
    )
}