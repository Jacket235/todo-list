import ToDoListCreatorContext from '../../Context/ToDoListCreatorContext';
import './toDoListTasks.css';
import { useContext } from 'react';

export function ToDoListTasks() {
    const { tasks, setTasks } = useContext(ToDoListCreatorContext)!;

    const handleCreateTask = () => {
        setTasks(prev => {
            return [...prev, {id: crypto.randomUUID(), text: "", status: "incomplete"}]
        })
    }

    const handleChange = (id: string, newText: string) => {
        setTasks(prev => 
            prev.map(task => ( 
                task.id === id ? { ...task, text: newText} : task 
            )))
    }

    const handleDelete = (id: string) => {
        setTasks(prev => 
            prev.filter(task => (
                task.id !== id
            )));
    }

    return(
        <div className="list-tasks">
            <span>Tasks</span>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input value={task.text} onChange={e => handleChange(task.id, e.target.value)} />
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
                <li id="add">
                    <button onClick={handleCreateTask}>
                        <img src='plus-sign.svg' alt="plus sign" width="16px" height="16px" />
                    </button>
                </li>
            </ul>
        </div>
    )
}