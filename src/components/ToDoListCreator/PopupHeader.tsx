import './popupHeader.css';

export function PopupHeader() {
    return(
        <div className='popup-header'>
            Create a new todo list
            <button>
                <img src='exit.svg' width="16px" height="16px" />
            </button>
        </div>
    );
}