import { ToDoListCreatorContent } from './ToDoListCreatorContent';
import { TodoListCreatorHeader } from './TodoListCreatorHeader'
import { useState } from 'react';
import NewToDoListContext from '../../Context/NewToDoListContext';
import { Task } from '../../Types';
import './toDoListCreator.css'

export function ToDoListCreator() {
    const id = crypto.randomUUID();
    const [title, setTitle] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
            <div className="todo-list-creator">
                <TodoListCreatorHeader />
                <div className='creator-scrollable'>
                    <NewToDoListContext.Provider value={{id: id, title: title, setTitle: setTitle, tasks: tasks, setTasks: setTasks}}>
                        <ToDoListCreatorContent />
                    </NewToDoListContext.Provider>
                </div>
            </div>
    );
}