import { ToDoListCreatorContent } from './ToDoListCreatorContent';
import { TodoListCreatorHeader } from './TodoListCreatorHeader'
import './toDoListCreator.css'

export function ToDoListCreator() {
    return (
        <div className="todo-list-creator">
            <TodoListCreatorHeader />
            <div className='creator-scrollable'>
                <ToDoListCreatorContent />
            </div>
        </div>
    );
}