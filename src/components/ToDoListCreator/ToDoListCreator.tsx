import './toDoListCreator.css'
import { ToDoListCreatorContent } from './ToDoListCreatorContent';
import { TodoListCreatorHeader } from './TodoListCreatorHeader'
import ToDoListCreatorContext from '../../Context/TodoListCreatorContext';
import { useState } from 'react';
import { Task } from '../../Types';

export function ToDoListCreator() {
    const id = crypto.randomUUID();
    const [title, setTitle] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <ToDoListCreatorContext.Provider value={{id: id, title: title, setTitle: setTitle, tasks: tasks, setTasks: setTasks}}>
            <div className="todo-list-creator">
                <TodoListCreatorHeader />
                <div className='creator-scrollable'>
                    <ToDoListCreatorContent />
                </div>
            </div>
        </ToDoListCreatorContext.Provider>
    );
}