import { ToDoList } from "../components/ToDoList";
import './main.css';

export function Main() {
    const tasks = [
        "sdfsrtgrtrtrtdtd rthd rthd rthd rthd rth",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi dolore quis quam amet velit nihil porro veniam sint, accusantium nobis? Praesentium placeat ducimus, quo illum ex in quasi vero?",
        "okay",
        "hey"
    ]


    return (
        <main>
            <div className="main-content">
                <ToDoList title={"Title"} tasks={tasks} />
                <ToDoList title={"Title"} tasks={tasks} />
                <ToDoList title={"Title"} tasks={tasks} />
            </div>
        </main>
    );
}