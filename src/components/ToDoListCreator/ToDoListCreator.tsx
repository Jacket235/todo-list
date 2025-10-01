import { ToDoListCreatorContent } from './ToDoListCreatorContent';
import { TodoListCreatorHeader } from './TodoListCreatorHeader'
import './toDoListCreator.css'

export function ToDoListCreator() {
    return (
        <div className="todo-list-creator">
            <TodoListCreatorHeader />
            <ToDoListCreatorContent />
        </div>
    );
}