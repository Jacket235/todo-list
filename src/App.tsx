import './App.css';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { useEffect } from 'react';
import { Overlay } from './components/ui/Overlay/Overlay';
import { useOverlayContext } from './hooks/useOverlayContext';
import { useTodosContext } from './hooks/useTodosContext';

function App() {
    const { overlayVisible, overlayChild, closeOverlay } = useOverlayContext();
    const { todos, setTodos } = useTodosContext();

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
            <Main />
        </div>
    );
}

export default App;
