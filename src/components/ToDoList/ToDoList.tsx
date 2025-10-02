import './toDoList.css';
import { TodoListData } from '../../Types';
import { ToDoListTitle } from './ToDoListTitle';
import { ToDoContent } from './ToDoContent';

export function ToDoList({ title, tasks }: TodoListData) {
    return (
        <div className="todo-list">
            <ToDoListTitle title={title} />
            <ToDoContent tasks={tasks} />
        </div>
    )
}