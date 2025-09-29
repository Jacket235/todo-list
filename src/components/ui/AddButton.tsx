import './addButton.css';

type props = {
    text: string
}

export function Button({ text }: props) {
    return (
        <button className='button'>
            {text}
        </button>
    )
}