import { ToDoList } from "../components/ToDoList";
import './main.css';

export function Main() {
    const tasks1 = [
        "Buy groceries: milk, bread, eggs, and coffee",
        "Finish React project and push to GitHub",
        "Read 20 pages of 'Clean Code'",
        "Call mom in the evening"
    ]

    const tasks2 = [
        "Morning jog – 5km around the park",
        "Prepare slides for Monday’s presentation",
        "Reply to 3 client emails",
        "Plan weekend trip itinerary"
    ]

    const tasks3 = [
        "Organize desk and clean workspace",
        "Watch a tutorial on Next.js",
        "Book dentist appointment",
        "Try new pasta recipe for dinner"
    ]

    return (
        <main>
            <div className="main-content">
                <ToDoList title={"Personal Tasks"} tasks={tasks1} />
                <ToDoList title={"Work Tasks"} tasks={tasks2} />
                <ToDoList title={"Miscellaneous"} tasks={tasks3} />
            </div>
        </main>
    );
}