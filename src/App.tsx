import './App.css';
import { Header } from './layout/Header';
import { Main } from './layout/Main';

function App() {
    const todos = [ {
        title: "Personal Tasks",
        tasks: [
            "Buy groceries: milk, bread, eggs, and coffee",
            "Finish React project and push to GitHub",
            "Morning jog – 5km around the park",
            "Read 20 pages of 'Clean Code'",
            "Call mom in the evening"
        ]}, {
        title: "Work Tasks",
        tasks: [
            "Prepare slides for Monday’s presentation",
            "Reply to 3 client emails",
            "Plan weekend trip itinerary"
        ]}, {
        title: "Miscellaneous",
        tasks: [
            "Organize desk and clean workspace",
            "Watch a tutorial on Next.js",
            "Book dentist appointment",
            "Try new pasta recipe for dinner"
        ]}
    ];

    return (
        <div className="App">
            <Header />
            <Main todos={todos} />
        </div>
    );
}

export default App;
