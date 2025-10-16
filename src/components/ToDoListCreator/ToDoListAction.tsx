import './toDoListAction.css';
import { useOverlayContext } from '../../hooks/useOverlayContext';
import { useTodosContext } from '../../hooks/useTodosContext';
import { TodoListType } from '../../Types';
import { useTodoListCreatorContext } from '../../hooks/useTodoListCreatorContext';

export function ToDoListAction() {
    const toDoList = useTodoListCreatorContext();
    const { closeOverlay } = useOverlayContext();
    const { addTodo } = useTodosContext();

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