import './toDoListCreatorContent.css'

export function ToDoListCreatorContent() {
    return(
        <div className="popup-content">
            <div className='title-input'>
                <span>Title of the list</span>
                <input type='text' />
            </div>
            <div className="list-tasks">
                <span>Tasks</span>
                <ul>
                    <li>
                        <input placeholder='Study advanced psychology' />
                        <button>Delete</button>
                    </li>
                    <li id="add">
                        <button>
                            <img src='plus-sign.svg' width="16px" height="16px" />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="list-action">
                <button>Cancel</button>
                <button>Create</button>
            </div>
        </div>
    );
}