import '../styles/to-do-list-action.css'
import { useOverlayContext } from '../../../hooks/useOverlayContext';
import { TodoListType } from '../../../Types';
import { useTodoListCreatorContext } from '../../../hooks/useTodoListCreatorContext';

export function ToDoListAction() {
    const toDoList = useTodoListCreatorContext();
    const { closeOverlay } = useOverlayContext();

    const handleCreateList = () => {
        if(!toDoList) return;

        const { id, title, tasks, addTodo } = toDoList;

        const newTodoList: TodoListType = {
            id: id,
            title: title,
            tasks: tasks
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