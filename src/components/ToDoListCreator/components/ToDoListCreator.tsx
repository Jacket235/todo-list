import '../styles/to-do-list-creator.css'
import { ToDoListCreatorContent } from './ToDoListCreatorContent';
import { TodoListCreatorHeader } from './TodoListCreatorHeader'
import ToDoListCreatorContext from '../../../context/TodoListCreatorContext';
import { useState } from 'react';
import { Task, TodoListType } from '../../../Types';
import { useTodosContext } from '../../../hooks/useTodosContext';

export function ToDoListCreator() {
    const { setTodos } = useTodosContext();
    
    const id = crypto.randomUUID();
    const [title, setTitle] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTodo = (todo: TodoListType) => {
        setTodos(prev => {
            const updated = [...prev, todo];
            localStorage.setItem("todos", JSON.stringify(updated));
            return updated;
        });
    }

    return (
        <ToDoListCreatorContext.Provider value={{id: id, title: title, setTitle: setTitle, addTodo: addTodo, tasks: tasks, setTasks: setTasks}}>
            <div className="todo-list-creator">
                <TodoListCreatorHeader />
                <div className='creator-scrollable'>
                    <ToDoListCreatorContent />
                </div>
            </div>
        </ToDoListCreatorContext.Provider>
    );
}