import { useId } from "react";
import { ToDoList } from "../components/ToDoList";
import './main.css';

type Task = {
    id: string;
    text: string;
}

type TodoListType = {
    id: string;
    title: string;
    tasks: { 
        complete: Task[], 
        inprogress: Task[], 
        incomplete: Task[] 
    };
}

export function Main({ todos }: { todos: TodoListType[] }) {
    return (
        <main>
            <div className="main-content">
                {todos.map((todo, i) => (
                    <ToDoList key={todo.id} title={todo.title} tasks={todo.tasks} />
                ))}
            </div>
        </main>
    );
}