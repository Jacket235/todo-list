import NewToDoListContext from '../../Context/NewToDoListContext';
import OverlayContext from '../../Context/OverlayContext';
import { TodoListType } from '../../Types';
import './toDoListAction.css';
import { useContext } from 'react';

export function ToDoListAction() {
    const toDoList = useContext(NewToDoListContext);
    const overlay = useContext(OverlayContext);

    const handleCreateList = () => {
        if(!toDoList) return;

        const existingTodos: TodoListType[] =  JSON.parse(localStorage.getItem("todos") || '[]');

        const newTodoList: TodoListType = {
            id: toDoList.id,
            title: toDoList.title,
            tasks: {
                complete: [],
                inprogress: [],
                incomplete: toDoList.tasks
            }
        }

        const updateTodos = [...existingTodos, newTodoList];

        localStorage.setItem("todos", JSON.stringify(updateTodos));
        overlay?.closeOverlay();
    }
    
    return (
        <div className="list-action">
            <button>Cancel</button>
            <button onClick={handleCreateList}>Create</button>
        </div>
    )
}