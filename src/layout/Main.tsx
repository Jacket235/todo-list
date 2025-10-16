import { ToDoList } from "../components/ToDoList/ToDoList";
import './main.css';
import TodoListContext from "../context/TodoListContext";
import { useTodosContext } from "../hooks/useTodosContext";

export function Main() {
    const { todos } = useTodosContext();

    return (
        <main>
            <div className="main-content">
                {todos.map(todo => (
                    <TodoListContext.Provider key={todo.id} value={{id: todo.id, title: todo.title, tasks: todo.tasks}}>
                        <ToDoList />
                    </TodoListContext.Provider>
                ))}
            </div>
        </main>
    );
}