import './toDoList.css';
import { TodoListData } from '../../Types';
import { ToDoListEdit } from '../ToDoListEdit/ToDoListEdit';
import OverlayContext from '../../Context/OverlayContext';
import { useContext } from 'react';
import { ToDoListTitle } from './ToDoListTitle';
import { ToDoContent } from './ToDoContent';

export function ToDoList({ title, tasks }: TodoListData) {
    const overlay = useContext(OverlayContext);
    
    const handleEditList = () => {
        overlay?.openOverlay(<ToDoListEdit />)
    }

    return (
        <div className="todo-list">
            <ToDoListTitle title={title} handleEditList={handleEditList} />
            <ToDoContent tasks={tasks} />
        </div>
    )
}