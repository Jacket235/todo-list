import NewToDoListContext from '../../Context/NewToDoListContext';
import OverlayContext from '../../Context/OverlayContext';
import TodosContext from '../../Context/TodosContext';
import { TodoListType } from '../../Types';
import './toDoListAction.css';
import { useContext } from 'react';

export function ToDoListAction() {
    const toDoList = useContext(NewToDoListContext);
    const { closeOverlay } = useContext(OverlayContext)!;
    const { addTodo } = useContext(TodosContext)!;

    const handleCreateList = () => {
        if(!toDoList) return;

        const existingTodos: TodoListType[] =  JSON.parse(localStorage.getItem("todos") || '[]');

        const newTodoList: TodoListType = {
            id: toDoList.id,
            title: toDoList.title,
            tasks: toDoList.tasks
        }

        const updateTodos = [...existingTodos, newTodoList];

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