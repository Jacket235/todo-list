import ToDoListCreatorContext from '../../Context/ToDoListCreatorContext';
import OverlayContext from '../../Context/OverlayContext';
import TodosContext from '../../Context/TodosContext';
import { TodoListType } from '../../Types';
import './toDoListAction.css';
import { useContext } from 'react';

export function ToDoListAction() {
    const toDoList = useContext(ToDoListCreatorContext);
    const { closeOverlay } = useContext(OverlayContext)!;
    const { addTodo } = useContext(TodosContext)!;

    const handleCreateList = () => {
        if(!toDoList) return;

        const newTodoList: TodoListType = {
            id: toDoList.id,
            title: toDoList.title,
            tasks: toDoList.tasks
        }

        addTodo(newTodoList);

        handleClose();
    }

    const handleClose = () => {
        if(!toDoList) return;

        toDoList.setTasks([]);
        toDoList.setTitle("");
        closeOverlay();
    }
    
    return (
        <div className="list-action">
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleCreateList}>Create</button>
        </div>
    )
}