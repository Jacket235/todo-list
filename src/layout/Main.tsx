import { ToDoList } from "../components/ToDoList";
import './main.css';

export function Main({ todos }: { todos: {title: string; tasks: string[]}[]}) {
    return (
        <main>
            <div className="main-content">
                {todos.map((todo, i) => (
                    <ToDoList title={todo.title} tasks={todo.tasks} />
                ))}
            </div>
        </main>
    );
}