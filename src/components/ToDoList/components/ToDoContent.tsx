import '../styles/to-do-content.css'
import { ToDoItem } from "../../ToDoItem/components/ToDoItem";
import { useTodoListContext } from "../../../hooks/useTodoListContext";

export function ToDoContent() {
    const { tasks } = useTodoListContext();

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