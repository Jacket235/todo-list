import './App.css';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { useEffect, useContext } from 'react';
import OverlayContext from './Context/OverlayContext';
import { Overlay } from './components/ui/Overlay/Overlay';
import TodosContext from './Context/TodosContext';

function App() {
    const { overlayVisible, overlayChild, closeOverlay } = useContext(OverlayContext)!;
    const { todos, setTodos } = useContext(TodosContext)!;

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        setTodos(savedTodos ? JSON.parse(savedTodos) : []);
    }, [])

    return (
        <div className="App">
            {overlayVisible && (
                <Overlay child={overlayChild} onClose={closeOverlay} />
            )}
            <Header />
            <Main todos={todos} />
        </div>
    );
}

export default App;
