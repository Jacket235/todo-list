import { ToDoItem } from "../ToDoItem/ToDoItem";
import { useContext } from "react";
import TodoListContext from "../../Context/TodoListContext";
import './toDoContent.css';

export function ToDoContent() {
    const { tasks } = useContext(TodoListContext)!; 

    const order = [
        "incomplete",
        "inprogress",
        "complete"
    ]

    return (
        <div className="todo-content">
            <ul>
                {order.map(status => 
                    tasks
                        .filter(task => task.status === status)
                        .map(task => (
                            <li key={task.id}>
                                <ToDoItem idTask={task.id} task={task.text} status={task.status} />
                            </li>
                        ))
                )}
            </ul>
        </div>
    );
}