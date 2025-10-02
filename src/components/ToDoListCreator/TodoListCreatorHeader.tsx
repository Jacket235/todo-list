import './todoListCreatorHeader.css';

export function TodoListCreatorHeader() {
    return(
        <div className='popup-header'>
            Create a new todo list
            <button>
                <img src='exit.svg' alt="Exit" width="16px" height="16px" />
            </button>
        </div>
    );
}