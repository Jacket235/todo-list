import './App.css';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { useState, useEffect } from 'react';
import { TodoListType } from './Types';

function App() {
    const [todos, setTodos] = useState<TodoListType[]>([]);

    useEffect(() => {
        setTodos([{
            id: crypto.randomUUID(),
            title: "Personal Tasks",
            tasks: {
                complete: [
                    { id: crypto.randomUUID(), text: "Buy groceries: milk, bread, eggs, and coffee"},
                    { id: crypto.randomUUID(), text: "Morning jog – 5km around the park"}
                ],
                inprogress: [
                    { id: crypto.randomUUID(), text: "Finish React project and push to GitHub"}
                    
                ],
                incomplete: [
                    { id: crypto.randomUUID(), text: "Read 20 pages of 'Clean Code'"},
                    { id: crypto.randomUUID(), text: "Call mom in the evening"}
                ]
            }}]
        );
    }, [])

    return (
        <div className="App">
            <Header />
            <Main todos={todos} />
        </div>
    );
}

export default App;
