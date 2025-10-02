import NewToDoListContext from '../../Context/NewToDoListContext';
import './toDoListAction.css';
import { useContext } from 'react';

export function ToDoListAction() {
    const toDoList = useContext(NewToDoListContext);
    
    return (
        <div className="list-action">
            <button>Cancel</button>
            <button onClick={() => {
                console.log(toDoList);
            }}>Create</button>
        </div>
    )
}