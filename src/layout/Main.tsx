import { ToDoList } from "../components/ToDoList/ToDoList";
import './main.css';
import { TodoListType } from "../Types";

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