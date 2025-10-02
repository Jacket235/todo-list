import './App.css';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { useState, useEffect } from 'react';
import { TodoListType } from './Types';
import OverlayContext from './Context/OverlayContext';
import { Overlay } from './components/ui/Overlay/Overlay';
import { ToDoListCreator } from './components/ToDoListCreator/ToDoListCreator';
import { ToDoListEdit } from './components/ToDoListEdit/ToDoListEdit';

function App() {
    const [todos, setTodos] = useState<TodoListType[]>([]);

    const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
    const [overlayChild, setOverlayChild] = useState<React.ReactNode| null>(null);

    const handleCloseOverlay = () => {
        setOverlayVisible(false);
        setOverlayChild(null);
    }

    const handleOpenCreator = () => {
        setOverlayVisible(true);
        setOverlayChild(<ToDoListCreator />);
    }

    const handleOpenEditor = () => {
        setOverlayVisible(true);
        setOverlayChild(<ToDoListEdit />);
    }

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        setTodos(savedTodos ? JSON.parse(savedTodos) : []);
    }, [])

    return (
        <OverlayContext.Provider value={{closeOverlay: handleCloseOverlay, openCreator: handleOpenCreator, openEditor: handleOpenEditor}}>
            <div className="App">
                {overlayVisible && (
                    <Overlay child={overlayChild} onClose={handleCloseOverlay} />
                )}
                <Header />
                <Main todos={todos} />
            </div>
        </OverlayContext.Provider>
    );
}

export default App;
