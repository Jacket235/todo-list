import { ToDoList } from "../components/ToDoList/ToDoList";
import TodosContext from "../Context/TodosContext";
import { useContext } from "react";
import './main.css';
import TodoListContext from "../Context/TodoListContext";

export function Main() {
    const { todos } = useContext(TodosContext)!;

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